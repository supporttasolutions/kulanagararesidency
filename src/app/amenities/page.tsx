import Image from "next/image";
import { Section } from "@/components/site/Section";
import { BookNowButton } from "@/components/site/BookNowButton";

export const metadata = {
  title: "Amenities | Kulangara Residency",
  description:
    "In-room amenities, property facilities, and guest services at Kulangara Residency in Kottayam.",
};

const blocks = [
  {
    title: "In-room amenities",
    items: ["Air conditioning", "Wi‑Fi", "Hot water", "Clean premium linens"],
  },
  {
    title: "Property facilities",
    items: ["Parking", "Easy arrival access", "Calm common areas", "Secure premises"],
  },
  {
    title: "Guest services",
    items: ["WhatsApp-first support", "Housekeeping", "Local guidance", "Flexible assistance"],
  },
] as const;

export default function AmenitiesPage() {
  return (
    <div>
      <Section
        eyebrow="Amenities"
        title="Quiet comfort, thoughtfully provided."
        subtitle="Minimal icons. Clear inclusions. Designed to build trust—quickly."
        actions={<BookNowButton variant="primary">Book on WhatsApp</BookNowButton>}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface">
            <Image
              src="/kulangara.jpg"
              alt="Kulangara Residency exterior"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative p-8">
              <p className="font-serif text-3xl tracking-tight">
                Premium, calm essentials.
              </p>
              <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                Everything is curated for a clean, peaceful stay—no clutter, no
                noise, and no unnecessary extras.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {blocks.map((b) => (
              <div
                key={b.title}
                className="rounded-[32px] border border-border bg-surface p-6"
              >
                <p className="text-xs tracking-[0.28em] uppercase text-muted">
                  {b.title}
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-foreground/90 sm:grid-cols-2">
                  {b.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

