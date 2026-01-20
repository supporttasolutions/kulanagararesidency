import Image from "next/image";
import { Section } from "@/components/site/Section";
import { ROOMS } from "@/lib/rooms";

export const metadata = {
  title: "Gallery | Kulangara Residency",
  description:
    "Explore the gallery of Kulangara Residency—rooms, interiors, and a calm premium ambience in Kottayam.",
};

const categories = [
  { key: "Rooms", images: ROOMS.flatMap((r) => r.images) },
  { key: "Exterior", images: [{ src: "/kulangara.jpg", alt: "Kulangara Residency exterior" }] },
  { key: "Reception", images: ROOMS[0]?.images ?? [] },
  { key: "Facilities", images: ROOMS[1]?.images ?? [] },
  { key: "Nearby", images: ROOMS[2]?.images ?? [] },
] as const;

export default function GalleryPage() {
  const all = categories.flatMap((c) => c.images).filter(Boolean);

  return (
    <div>
      <Section
        eyebrow="Gallery"
        title="A calm visual preview."
        subtitle="Masonry layout with a quiet, premium feel. Tap an image to view full screen (lightbox coming next)."
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c.key}
              className="rounded-full border border-border bg-surface px-4 py-2 text-xs text-muted"
            >
              {c.key}
            </span>
          ))}
        </div>

        <div className="mt-8 columns-2 gap-4 sm:columns-3">
          {all.map((img) => (
            <div
              key={img.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-[28px] border border-border bg-surface"
            >
              <div className="relative aspect-[4/3]">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

