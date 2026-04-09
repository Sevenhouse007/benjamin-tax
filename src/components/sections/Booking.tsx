"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { locationList } from "@/lib/locations";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Valid email required"),
  phone: z.string().regex(/^[\d\s().+-]{10,}$/, "Valid phone number required"),
  office: z.string().min(1, "Select an office"),
  returnType: z.string().min(1, "Select a service"),
  clientStatus: z.enum(["new", "returning"]),
  preferredTime: z.string().min(2, "Tell us when works best"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const returnTypes = [
  "W-2 / Individual Return",
  "Self-Employed / 1099",
  "Small Business",
  "Prior Year / Back Taxes",
  "ITIN Application",
  "Other",
];

type Props = {
  defaultOffice?: string;
};

export default function Booking({ defaultOffice }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { clientStatus: "new", office: defaultOffice ?? "" },
  });

  async function onSubmit(values: FormValues) {
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Request sent! The office will call you back to confirm.");
      reset({ clientStatus: "new", office: defaultOffice ?? "" });
    } catch {
      toast.error("Something went wrong. Please call us instead.");
    }
  }

  const inputBase =
    "w-full rounded-lg border border-sage/40 bg-white px-4 py-3 text-[14px] font-instrument text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold";

  return (
    <section id="book" className="bg-cream py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gold uppercase tracking-widest text-[12px] font-instrument font-bold text-center">
          Book an Appointment
        </p>
        <h2 className="font-crimson text-[36px] text-hunter font-bold mt-2 text-center">
          Request Your Free Appointment
        </h2>
        <p className="mt-3 text-[14px] text-charcoal/70 font-instrument text-center max-w-xl mx-auto">
          Fill out the form and the office manager will call you back to
          confirm a time. No account needed.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 bg-white border border-sage/30 rounded-2xl p-7 grid gap-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full Name" error={errors.name?.message}>
              <input {...register("name")} className={inputBase} placeholder="Maria Garcia" />
            </Field>
            <Field label="Phone" error={errors.phone?.message}>
              <input {...register("phone")} className={inputBase} placeholder="(323) 555-0100" />
            </Field>
          </div>

          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} className={inputBase} placeholder="you@example.com" />
          </Field>

          <Field label="Office" error={errors.office?.message}>
            <select {...register("office")} className={inputBase} defaultValue={defaultOffice ?? ""}>
              <option value="" disabled>
                Select an office
              </option>
              {locationList.map((l) => (
                <option key={l.slug} value={l.slug}>
                  {l.name}
                </option>
              ))}
            </select>
          </Field>

          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Type of Return" error={errors.returnType?.message}>
              <select {...register("returnType")} className={inputBase} defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {returnTypes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="New or Returning Client">
              <select {...register("clientStatus")} className={inputBase}>
                <option value="new">New client</option>
                <option value="returning">Returning client</option>
              </select>
            </Field>
          </div>

          <Field label="Preferred Day & Time" error={errors.preferredTime?.message}>
            <input
              {...register("preferredTime")}
              className={inputBase}
              placeholder="e.g. Tuesday afternoon, or Sat morning"
            />
          </Field>

          <Field label="Additional Notes (optional)">
            <textarea
              {...register("notes")}
              rows={3}
              className={cn(inputBase, "resize-none")}
              placeholder="Anything we should know before we call?"
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gold text-white font-instrument font-bold text-sm px-6 py-3 rounded-lg hover:brightness-95 disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-gold"
          >
            {isSubmitting ? "Sending…" : "Request Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-[12px] font-instrument font-bold text-charcoal block mb-1">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-[11px] text-red-600 font-instrument">{error}</p>}
    </div>
  );
}
