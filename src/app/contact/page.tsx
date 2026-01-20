import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { BookNowButton } from "@/components/site/BookNowButton";

export const metadata = {
  title: "Contact | Kulangara Residency",
  description:
    "Contact Kulangara Residency in Kottayam. Call, WhatsApp, or get directions instantly.",
};

export default function ContactPage() {
  return (
    <div>
      <Section
        eyebrow="Contact"
        title="Direct, fast communication."
        subtitle="No forms needed. WhatsApp booking only—send your dates and room type."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-border bg-surface p-6">
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              WhatsApp
            </p>
            <p className="mt-3 font-serif text-3xl tracking-tight">
              {SITE.phoneDisplay}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Use WhatsApp for booking and availability confirmations.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BookNowButton prefill={{ roomType: "General" }} variant="primary">
                Book on WhatsApp
              </BookNowButton>
              <Button href={`tel:${SITE.phoneE164}`}>Call</Button>
            </div>
          </div>

          <div className="rounded-[32px] border border-border bg-surface p-6">
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              Address
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {SITE.addressLines.join(", ")}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={SITE.directionsLink} target="_blank" rel="noopener noreferrer">
                Get Directions
              </Button>
              <Button href="/policies">Policies</Button>
            </div>
          </div>
        </div>

        {/* Optional enquiry form -> WhatsApp */}
        <div className="mt-10 rounded-[36px] border border-border bg-surface p-6 sm:p-8">
          <p className="font-serif text-2xl tracking-tight">Quick enquiry</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            This form doesn’t submit anywhere—it opens WhatsApp with a prefilled
            message.
          </p>
          <EnquiryForm />
        </div>
      </Section>
    </div>
  );
}

