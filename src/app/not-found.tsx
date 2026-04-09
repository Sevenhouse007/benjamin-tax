import { LogoStacked } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-cream py-20 px-4 text-center">
      <LogoStacked className="h-28" />
      <h1 className="font-crimson text-[36px] text-hunter font-bold mt-8">
        Page not found
      </h1>
      <p className="mt-3 text-[14px] text-charcoal/70 font-instrument max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back on track.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-gold text-white font-instrument font-bold text-sm px-6 py-3 rounded-lg hover:brightness-95"
      >
        Go Home
      </a>
    </main>
  );
}
