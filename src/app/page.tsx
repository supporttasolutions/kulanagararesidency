 "use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";
import { ROOMS } from "@/lib/rooms";
import { useBookingModal } from "@/components/site/BookingModalProvider";
import { BookNowButton } from "@/components/site/BookNowButton";

export default function Home() {
  const { openBooking } = useBookingModal();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/kulangara.jpg"
            alt="Kulangara Residency exterior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-14 sm:pt-28 sm:pb-18">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              Premium Residency • Kottayam
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-tight text-foreground sm:text-6xl">
              {SITE.name}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              {SITE.tagline}. <span className="text-foreground/85">{SITE.shortLocation}</span>.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookNowButton variant="primary">Book on WhatsApp</BookNowButton>
              <Button href={SITE.directionsLink} target="_blank" rel="noopener noreferrer">
                Get Directions
              </Button>
            </div>
          </div>

          {/* Quick booking strip */}
          <div className="mt-14 rounded-[28px] border border-border bg-[color-mix(in_oklab,var(--color-surface)_88%,black)]/70 p-4 backdrop-blur sm:p-5">
            <form
              action="/"
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const fd = new FormData(form);
                const checkIn = String(fd.get("checkIn") ?? "");
                const checkOut = String(fd.get("checkOut") ?? "");
                const guests = String(fd.get("guests") ?? "");
                const roomType = String(fd.get("roomType") ?? "");
                openBooking({ checkIn, checkOut, guests, roomType });
              }}
            >
              <label className="grid gap-1">
                <span className="text-[11px] tracking-[0.24em] uppercase text-muted">
                  Check-in
                </span>
                <input
                  name="checkIn"
                  type="date"
                  className="h-12 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground outline-none focus:border-[color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-[11px] tracking-[0.24em] uppercase text-muted">
                  Check-out
                </span>
                <input
                  name="checkOut"
                  type="date"
                  className="h-12 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground outline-none focus:border-[color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-[11px] tracking-[0.24em] uppercase text-muted">
                  Guests
                </span>
                <input
                  name="guests"
                  inputMode="numeric"
                  placeholder="2"
                  className="h-12 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground placeholder:text-muted outline-none focus:border-[color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-[11px] tracking-[0.24em] uppercase text-muted">
                  Room type
                </span>
                <select
                  name="roomType"
                  className="h-12 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground outline-none focus:border-[color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
                  defaultValue="Deluxe"
                >
                  <option value="Deluxe">Deluxe</option>
                  <option value="Premium">Premium</option>
                  <option value="Family">Family</option>
                </select>
              </label>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="h-12 w-full rounded-2xl bg-accent px-5 text-sm font-medium tracking-wide text-black shadow-[0_18px_55px_color-mix(in_oklab,var(--color-accent)_20%,transparent)]"
                >
                  WhatsApp Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <Section
        eyebrow="Kulangara Residency"
        title="Quiet luxury, designed for a calm stay."
        subtitle="Minimal sections. Maximum clarity. Everything here is built to move you to WhatsApp booking—fast."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "28 Rooms", v: "A focused inventory—quiet and well-kept." },
            { k: "Prime Kottayam access", v: "Near Nattakom for easy arrival." },
            { k: "Clean premium interiors", v: "Refined, minimal, restful." },
            { k: "Parking & easy arrival", v: "Simple, dependable access." },
          ].map((h) => (
            <div
              key={h.k}
              className="rounded-[28px] border border-border bg-surface p-6 shadow-[var(--shadow)]"
            >
              <p className="font-serif text-2xl tracking-tight">{h.k}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{h.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ROOMS PREVIEW */}
      <Section
        eyebrow="Rooms"
        title="Select your room. Book in seconds."
        subtitle="No payment steps. No forms. Just WhatsApp—formatted and ready."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {ROOMS.map((room) => (
            <div
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
                <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                  <span className="rounded-full border border-border px-3 py-1">
                    {room.guests}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1">
                    WhatsApp booking
                  </span>
                </div>
                <div className="mt-6 flex gap-3">
                  <Button href={`/rooms/${room.slug}`} className="flex-1">
                    View Room
                  </Button>
                  <BookNowButton
                    prefill={{ roomType: room.name }}
                    variant="primary"
                    className="flex-1"
                  >
                    WhatsApp
                  </BookNowButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* GALLERY TEASER */}
      <Section eyebrow="Gallery" title="A glimpse of the calm.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.flatMap((r) => r.images).slice(0, 6).map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border bg-surface"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/gallery"
            className="text-sm tracking-wide text-muted hover:text-foreground"
          >
            View Gallery →
          </Link>
        </div>
      </Section>

      {/* LOCATION PREVIEW */}
      <Section
        eyebrow="Location"
        title="Near Nattakom. Easy, dependable arrival."
        subtitle="A calm base with quick access across Kottayam."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-border bg-surface p-6">
            <p className="font-serif text-2xl tracking-tight">Address</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {SITE.addressLines.join(", ")}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Near Village Office", "Nattakom P.O", "Kottayam City Access"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
            <div className="mt-8 flex gap-3">
              <Button href={SITE.directionsLink} target="_blank" rel="noopener noreferrer">
                Get Directions
              </Button>
              <BookNowButton prefill={{ roomType: "General" }} variant="primary">
                WhatsApp
              </BookNowButton>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface">
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_60%_35%,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent)]" />
            <div className="relative p-6">
              <p className="font-serif text-2xl tracking-tight">Map preview</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Open directions in Google Maps for the fastest route.
              </p>
              <div className="mt-6 rounded-[28px] border border-border bg-background/40 p-5">
                <p className="text-xs tracking-[0.28em] uppercase text-muted">
                  Landmark
                </p>
                <p className="mt-2 font-serif text-xl">
                  {SITE.shortLocation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="rounded-[36px] border border-border bg-surface p-8 sm:p-12">
          <p className="text-xs tracking-[0.28em] uppercase text-muted">
            Ready to stay?
          </p>
          <p className="mt-4 font-serif text-4xl leading-[1.03] tracking-tight">
            Book your stay in seconds via WhatsApp.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Send your dates and room type—our team will confirm availability and
            tariff.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookNowButton variant="primary">Book on WhatsApp</BookNowButton>
            <Button href="/rooms">Explore Rooms</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
