import { Section } from "@/components/site/Section";

export const metadata = {
  title: "Policies | Kulangara Residency",
  description:
    "Read check-in/check-out, ID proof, cancellation, children, and smoking/alcohol policies for Kulangara Residency.",
};

const policies = [
  {
    title: "Check-in / Check-out",
    body: [
      "Standard timings apply. Please confirm exact timings on WhatsApp.",
      "Early check-in / late check-out is subject to availability.",
    ],
  },
  {
    title: "ID proof",
    body: ["Valid government ID is required at check-in for all guests."],
  },
  {
    title: "Cancellation",
    body: [
      "Cancellation rules may vary by date and season.",
      "Please confirm cancellation and refund terms on WhatsApp before booking.",
    ],
  },
  {
    title: "Children policy",
    body: [
      "Children are welcome.",
      "Please confirm extra bed availability on WhatsApp if required.",
    ],
  },
  {
    title: "Smoking / alcohol",
    body: [
      "Smoking and alcohol rules may apply based on room and property guidelines.",
      "Please confirm on WhatsApp if you have any questions.",
    ],
  },
] as const;

export default function PoliciesPage() {
  return (
    <div>
      <Section
        eyebrow="Policies"
        title="Clear, simple guidelines."
        subtitle="Designed for trust and clarity. If you need confirmation on any point, WhatsApp us—fast."
      >
        <div className="grid gap-4">
          {policies.map((p) => (
            <div
              key={p.title}
              className="rounded-[32px] border border-border bg-surface p-6"
            >
              <p className="font-serif text-2xl tracking-tight">{p.title}</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                {p.body.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

