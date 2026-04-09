"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Valid email required"),
  phone: z
    .string()
    .regex(/^[\d\s().+-]{10,}$/, "Valid phone number required"),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "A short message helps us prepare"),
});

type FormValues = z.infer<typeof schema>;

const services = [
  "W-2 / Individual Return",
  "Self-Employed / 1099",
  "Small Business",
  "Prior Year / Back Taxes",
  "ITIN Application",
  "Fast Cash Advance",
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    // Placeholder — wire to your API/email service later
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact form submission:", values);
    toast.success("Thanks! We'll be in touch within one business day.");
    reset();
  }

  const inputBase =
    "w-full rounded-lg border border-sage/40 bg-white px-4 py-3 text-[14px] font-instrument text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold";

  return (
    <section id="contact" className="bg-cream py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gold uppercase tracking-widest text-[12px] font-instrument font-bold text-center">
          Get In Touch
        </p>
        <h2 className="font-crimson text-[36px] text-hunter font-bold mt-2 text-center">
          Request a Free Quote
        </h2>
        <p className="mt-3 text-[14px] text-charcoal/70 font-instrument text-center max-w-xl mx-auto">
          Tell us about your situation and a certified preparer will get back
          to you within one business day.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 bg-white border border-sage/30 rounded-2xl p-7 grid gap-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-[12px] font-instrument font-bold text-charcoal block mb-1">
                Full Name
              </label>
              <input {...register("name")} className={inputBase} placeholder="Maria Garcia" />
              {errors.name && (
                <p className="mt-1 text-[11px] text-red-600 font-instrument">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-[12px] font-instrument font-bold text-charcoal block mb-1">
                Phone
              </label>
              <input {...register("phone")} className={inputBase} placeholder="(323) 555-0100" />
              {errors.phone && (
                <p className="mt-1 text-[11px] text-red-600 font-instrument">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="text-[12px] font-instrument font-bold text-charcoal block mb-1">
              Email
            </label>
            <input {...register("email")} className={inputBase} placeholder="you@example.com" />
            {errors.email && (
              <p className="mt-1 text-[11px] text-red-600 font-instrument">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-[12px] font-instrument font-bold text-charcoal block mb-1">
              Service
            </label>
            <select {...register("service")} className={inputBase} defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-[11px] text-red-600 font-instrument">
                {errors.service.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-[12px] font-instrument font-bold text-charcoal block mb-1">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className={cn(inputBase, "resize-none")}
              placeholder="Briefly describe your tax situation…"
            />
            {errors.message && (
              <p className="mt-1 text-[11px] text-red-600 font-instrument">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gold text-white font-instrument font-bold text-sm px-6 py-3 rounded-lg hover:brightness-95 disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-gold"
          >
            {isSubmitting ? "Sending…" : "Send Request"}
          </button>
        </form>
      </div>
    </section>
  );
}
