import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CalendlyButton from "@/components/CalendlyButton";
import { buttonClasses } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Benjamin Tax Service — En Español",
  description:
    "Preparación de impuestos certificada en Los Ángeles. Hablamos español. Reembolso máximo garantizado. 15+ años de experiencia.",
};

const servicios = [
  {
    title: "Declaraciones W-2 e Individuales",
    body: "Servicio completo para empleados, jubilados y declarantes individuales.",
  },
  {
    title: "Trabajadores Independientes y 1099",
    body: "Maximizamos las deducciones para freelancers, gig workers y contratistas.",
  },
  {
    title: "Pequeños Negocios",
    body: "Declaraciones para S-Corp, LLC y propietarios únicos con orientación experta.",
  },
  {
    title: "Años Anteriores e Impuestos Atrasados",
    body: "¿Atrasado? Manejamos declaraciones de años anteriores y correspondencia con el IRS de manera discreta.",
  },
  {
    title: "Solicitudes ITIN",
    body: "Ayudamos a personas sin Número de Seguro Social a obtener un ITIN y declarar correctamente.",
  },
  {
    title: "Adelanto Rápido de Efectivo",
    body: "Reciba hasta $2,500 el mismo día. Aprobación en minutos, sin verificación de crédito.",
  },
];

export default function EspanolPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Español"
        title="Obtenga Su Reembolso Máximo. Garantizado."
        subtitle="Expertos certificados en impuestos sirviendo a Los Ángeles por más de 15 años. CTEC y PTIN certificados, completamente bilingües."
      />

      <section className="py-12 text-center">
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          <CalendlyButton className={buttonClasses({ variant: "gold", size: "md" })}>
            Reservar Cita Gratis
          </CalendlyButton>
          <a
            href="tel:+13239827929"
            className={buttonClasses({ variant: "outline", size: "md" })}
          >
            Llamar (323) 982-7929
          </a>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-crimson text-[36px] text-hunter font-bold text-center">
            Nuestros Servicios
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-sage/30 rounded-2xl p-6 hover:border-gold transition-colors"
              >
                <h3 className="font-instrument font-bold text-[14px] text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-2 text-[12px] text-charcoal/60 font-instrument leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-crimson text-[32px] text-hunter font-bold">
            ¿Por Qué Elegir Benjamin Tax Service?
          </h2>
          <p className="mt-4 text-[15px] text-charcoal/70 font-instrument">
            Más de 15 años sirviendo a las familias del Gran Los Ángeles.
            Equipo completamente bilingüe, certificado por CTEC, y autorizado
            por el IRS para presentar declaraciones electrónicas. Sin costos
            sorpresa, sin presión, y con la garantía de obtener el máximo
            reembolso al que tiene derecho.
          </p>
        </div>
      </section>
    </main>
  );
}
