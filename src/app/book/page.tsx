import type { Metadata } from "next";
import Booking from "@/components/sections/Booking";

export const metadata: Metadata = {
  title: "Book Appointment | Benjamin Tax Service",
  description:
    "Request a free tax appointment at any of our 4 Greater LA offices. The office manager will call you back to confirm.",
};

export default function BookPage() {
  return (
    <main className="flex-1">
      <Booking />
    </main>
  );
}
