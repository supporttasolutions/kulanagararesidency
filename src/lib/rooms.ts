export type Room = {
  slug: string;
  name: string;
  short: string;
  guests: string;
  inclusions: string[];
  description: string;
  features: string[];
  images: { src: string; alt: string }[];
};

export const ROOMS: Room[] = [
  {
    slug: "deluxe",
    name: "Deluxe Room",
    short: "A calm, refined room for effortless rest.",
    guests: "Up to 2 guests",
    inclusions: ["Air conditioning", "Wi‑Fi", "Hot water", "Daily housekeeping"],
    description:
      "Designed for quiet comfort with clean premium finishes, soft lighting, and a restful layout—ideal for business stays and short breaks in Kottayam.",
    features: [
      "Elegant, minimal interiors",
      "Work-friendly seating",
      "Quiet night ambience",
      "Clean, premium linens",
    ],
    images: [
      { src: "/images/room-deluxe-1.svg", alt: "Deluxe room interior" },
      { src: "/images/room-deluxe-2.svg", alt: "Deluxe room detail" },
      { src: "/images/room-deluxe-3.svg", alt: "Deluxe room ambience" },
    ],
  },
  {
    slug: "premium",
    name: "Premium Room",
    short: "More space, more calm—made for longer stays.",
    guests: "Up to 3 guests",
    inclusions: ["Air conditioning", "Wi‑Fi", "Hot water", "Parking"],
    description:
      "A spacious upgrade with a serene feel and thoughtful details. Perfect when you want extra breathing room and a premium, unhurried stay.",
    features: [
      "Spacious layout",
      "Soft, warm lighting",
      "Comfort-first seating",
      "Easy arrival & parking",
    ],
    images: [
      { src: "/images/room-premium-1.svg", alt: "Premium room interior" },
      { src: "/images/room-premium-2.svg", alt: "Premium room detail" },
      { src: "/images/room-premium-3.svg", alt: "Premium room ambience" },
    ],
  },
  {
    slug: "family",
    name: "Family Room",
    short: "A relaxed base for families and small groups.",
    guests: "Up to 4 guests",
    inclusions: ["Air conditioning", "Wi‑Fi", "Hot water", "Extra space"],
    description:
      "Comfortable, practical, and calm—made for families who want a clean premium stay with enough room to settle in and unwind.",
    features: [
      "Family-friendly space",
      "Flexible sleeping setup",
      "Calm and private feel",
      "Easy access to Kottayam",
    ],
    images: [
      { src: "/images/room-family-1.svg", alt: "Family room interior" },
      { src: "/images/room-family-2.svg", alt: "Family room detail" },
      { src: "/images/room-family-3.svg", alt: "Family room ambience" },
    ],
  },
];

export function getRoom(slug: string) {
  return ROOMS.find((r) => r.slug === slug);
}

