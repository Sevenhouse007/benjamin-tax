type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="bg-cream border-b border-hunter/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {eyebrow && (
          <p className="text-gold uppercase tracking-widest text-[12px] font-instrument font-bold">
            {eyebrow}
          </p>
        )}
        <h1 className="font-crimson text-[48px] leading-tight text-hunter font-bold mt-2">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-[15px] text-charcoal/70 font-instrument max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
