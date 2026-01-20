import { SITE } from "@/lib/site";

export type WhatsAppBookingDraft = {
  name?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomType?: string;
  notes?: string;
};

export function buildWhatsAppBookingMessage(draft: WhatsAppBookingDraft = {}) {
  const lines = [
    `Hi ${SITE.name},`,
    "",
    `Name: ${draft.name ?? ""}`,
    `Phone: ${draft.phone ?? ""}`,
    `Check-in: ${draft.checkIn ?? ""}`,
    `Check-out: ${draft.checkOut ?? ""}`,
    `Guests: ${draft.guests ?? ""}`,
    `Room Type: ${draft.roomType ?? ""}`,
    `Notes: ${draft.notes ?? ""}`,
    "",
    "Please confirm availability and tariff.",
  ];

  return lines.join("\n");
}

export function buildWhatsAppLink(draft: WhatsAppBookingDraft = {}) {
  const text = buildWhatsAppBookingMessage(draft);
  return `https://wa.me/${SITE.whatsappNumberNoPlus}?text=${encodeURIComponent(
    text,
  )}`;
}

