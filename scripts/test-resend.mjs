// Quick test: does Resend allow sending from benjamintaxes.com with only DKIM verified?
// Usage: RESEND_API_KEY=re_xxx node scripts/test-resend.mjs
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("Missing RESEND_API_KEY env var");
  process.exit(1);
}

const resend = new Resend(apiKey);

const result = await resend.emails.send({
  from: "Benjamin Tax <bookings@benjamintaxes.com>",
  to: "sammy@benjamintaxes.com",
  subject: "Resend test from booking form",
  html: "<p>If you got this, DKIM-only verification is enough. The booking form will work.</p>",
});

console.log(JSON.stringify(result, null, 2));
