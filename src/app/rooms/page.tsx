import Image from "next/image";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/Button";
import { ROOMS } from "@/lib/rooms";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Rooms | Kulangara Residency",
  description:
    "Explore rooms at Kulangara Residency in Kottayam. Choose your room and book instantly via WhatsApp.",
};

export default function RoomsPage() {
  return (
    <div>
      <Section
        eyebrow="Rooms"
        title="Luxury stays, simplified."
        subtitle="Pick a room type. Send your dates on WhatsApp. We’ll confirm availability and tariff."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <article
              key={room.slug}
              className="overflow-hidden rounded-[32px] border border-border bg-surface"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={room.images[0]?.src ?? "/images/hero-dusk.svg"}
                  alt={room.images[0]?.alt ?? room.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
              </div>
              <div className="p-6">
                <p className="font-serif text-2xl tracking-tight">{room.name}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{room.short}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {room.guests}
                  </span>
                  {room.inclusions.slice(0, 3).map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {i}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button href={`/rooms/${room.slug}`}>View Room</Button>
                  <Button
                    href={buildWhatsAppLink({ roomType: room.name })}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                  >
                    Book on WhatsApp
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}

