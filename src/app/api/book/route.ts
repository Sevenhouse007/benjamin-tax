import { Resend } from "resend";
import { z } from "zod";
import { locationList } from "@/lib/locations";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[\d\s().+-]{10,}$/),
  office: z.string().min(1),
  returnType: z.string().min(1),
  clientStatus: z.enum(["new", "returning"]),
  preferredTime: z.string().min(2),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Validation failed", issues: parsed.error.issues }, { status: 400 });
  }
  const data = parsed.data;

  const office = locationList.find((l) => l.slug === data.office);
  if (!office) {
    return Response.json({ error: "Unknown office" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const from = process.env.BOOKING_FROM_EMAIL || "Benjamin Tax <onboarding@resend.dev>";

  const subject = `New booking request — ${office.name} — ${data.name}`;
  const html = `
    <h2>New Appointment Request</h2>
    <p><strong>Office:</strong> ${office.name}<br/>${office.address}</p>
    <hr/>
    <p><strong>Name:</strong> ${escape(data.name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escape(data.email)}">${escape(data.email)}</a></p>
    <p><strong>Phone:</strong> <a href="tel:${escape(data.phone)}">${escape(data.phone)}</a></p>
    <p><strong>Type of return:</strong> ${escape(data.returnType)}</p>
    <p><strong>Client:</strong> ${data.clientStatus === "new" ? "New" : "Returning"}</p>
    <p><strong>Preferred day/time:</strong> ${escape(data.preferredTime)}</p>
    ${data.notes ? `<p><strong>Notes:</strong><br/>${escape(data.notes).replace(/\n/g, "<br/>")}</p>` : ""}
    <hr/>
    <p style="color:#666;font-size:12px">Reply directly to this email to reach the client. Please call the client back to confirm a time.</p>
  `;

  try {
    await resend.emails.send({
      from,
      to: office.managerEmail,
      replyTo: data.email,
      subject,
      html,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ error: "Failed to send email" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
