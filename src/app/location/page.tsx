import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Location | Kulangara Residency",
  description:
    "Find Kulangara Residency near Nattakom Village Office, Kottayam. Get directions and book instantly via WhatsApp.",
};

export default function LocationPage() {
  return (
    <div>
      <Section
        eyebrow="Location"
        title="Near Nattakom Village Office, Kottayam."
        subtitle="Open directions for the fastest route. Booking stays on WhatsApp—quick and direct."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-border bg-surface">
            <div className="aspect-[4/3] w-full">
              <iframe
                title="Kulangara Residency map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Kulangara%20Residency%2C%20Near%20Nattakom%20Village%20Office%2C%20Kottayam%2C%20Kerala&output=embed"
              />
            </div>
          </div>

          <div className="rounded-[32px] border border-border bg-surface p-6">
            <p className="font-serif text-3xl tracking-tight">Address</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {SITE.addressLines.join(", ")}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Near Nattakom Village Office",
                "Nattakom P.O",
                "Kottayam access",
                "Easy arrival",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={SITE.directionsLink} target="_blank" rel="noopener noreferrer">
                Get Directions
              </Button>
              <Button
                href={buildWhatsAppLink({ roomType: "General" })}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Book on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

