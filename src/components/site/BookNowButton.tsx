"use client";

import { Button } from "@/components/ui/Button";
import { useBookingModal } from "@/components/site/BookingModalProvider";
import type { WhatsAppBookingDraft } from "@/lib/whatsapp";

type Props = {
  prefill?: WhatsAppBookingDraft;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

export function BookNowButton({ prefill, variant = "primary", className, children }: Props) {
  const { openBooking } = useBookingModal();
  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => openBooking(prefill)}
    >
      {children}
    </Button>
  );
}

