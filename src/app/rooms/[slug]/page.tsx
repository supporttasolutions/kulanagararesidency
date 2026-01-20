import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/Button";
import { getRoom, ROOMS } from "@/lib/rooms";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export async function generateStaticParams() {
  return ROOMS.map((r) => ({ slug: r.slug }));
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return notFound();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-6">
        <div className="overflow-hidden rounded-[36px] border border-border bg-surface">
          <div className="grid gap-2 p-2 md:grid-cols-3">
            {room.images.slice(0, 3).map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-[28px]"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Room detail"
        title={room.name}
        subtitle={`${room.guests} • WhatsApp booking only`}
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-7 text-muted">{room.description}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-border bg-surface p-6">
                <p className="text-xs tracking-[0.28em] uppercase text-muted">
                  Features
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                  {room.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-border bg-surface p-6">
                <p className="text-xs tracking-[0.28em] uppercase text-muted">
                  Included
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                  {room.inclusions.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="rounded-[32px] border border-border bg-surface p-6">
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              Booking
            </p>
            <p className="mt-4 font-serif text-2xl tracking-tight">
              Book via WhatsApp
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Send your dates and any notes. We’ll confirm availability and tariff.
            </p>
            <div className="mt-7 grid gap-3">
              <Button
                href={buildWhatsAppLink({ roomType: room.name })}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Book this room on WhatsApp
              </Button>
              <Button href="/policies">View policies</Button>
            </div>

            <div className="mt-8 rounded-[28px] border border-border bg-background/35 p-5">
              <p className="text-xs tracking-[0.28em] uppercase text-muted">
                Policy snippet
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Check‑in/out timings and ID proof requirements apply. Please see
                Policies for details.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}

