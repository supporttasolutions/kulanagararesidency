"use client";

import { SITE } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function StickyAction({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-[color-mix(in_oklab,var(--color-surface)_92%,black)] px-4 py-3 text-xs tracking-wide text-foreground/90"
    >
      <span className="font-medium">{label}</span>
    </a>
  );
}

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-[28px] border border-border bg-[color-mix(in_oklab,var(--color-background)_70%,black)]/70 p-2 backdrop-blur">
          <div className="flex gap-2">
            <StickyAction href={`tel:${SITE.phoneE164}`} label="Call" />
            <StickyAction
              href={buildWhatsAppLink({ roomType: "General" })}
              label="WhatsApp"
            />
            <StickyAction href={SITE.directionsLink} label="Directions" />
          </div>
        </div>
      </div>
    </div>
  );
}

