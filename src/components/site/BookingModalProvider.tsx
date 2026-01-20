"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppLink, type WhatsAppBookingDraft } from "@/lib/whatsapp";

type BookingContextValue = {
  openBooking: (prefill?: WhatsAppBookingDraft) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBookingModal() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return ctx;
}

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<WhatsAppBookingDraft | undefined>(undefined);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setError(null);
  }, []);

  const openBooking = useCallback((data?: WhatsAppBookingDraft) => {
    setPrefill(data);
    setIsOpen(true);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmedPhone = phone.trim();
      if (!/^\d{10}$/.test(trimmedPhone)) {
        setError("Enter a 10-digit phone number");
        return;
      }
      if (!name.trim()) {
        setError("Name is required");
        return;
      }
      setError(null);
      const href = buildWhatsAppLink({
        ...prefill,
        name: name.trim(),
        phone: trimmedPhone,
      });
      window.open(href, "_blank", "noopener,noreferrer");
      close();
    },
    [close, name, phone, prefill],
  );

  // Reset form when opening
  useEffect(() => {
    if (isOpen) {
      setName("");
      setPhone("");
      setError(null);
    }
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={close}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-[28px] border border-border bg-surface p-6 shadow-[var(--shadow)]"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs tracking-[0.28em] uppercase text-muted">
                    WhatsApp booking
                  </p>
                  <p className="mt-2 font-serif text-2xl tracking-tight">
                    Add your contact
                  </p>
                </div>
                <button
                  onClick={close}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted hover:text-foreground"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>

              <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
                <label className="grid gap-1">
                  <span className="text-[11px] tracking-[0.24em] uppercase text-muted">
                    Name
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground outline-none focus:border-[color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-[11px] tracking-[0.24em] uppercase text-muted">
                    Phone (10 digits)
                  </span>
                  <input
                    value={phone}
                    onChange={(e) => {
                      // Only allow digits, limit to 10 characters
                      const digitsOnly = e.target.value.replace(/\D/g, "");
                      if (digitsOnly.length <= 10) {
                        setPhone(digitsOnly);
                      }
                    }}
                    required
                    inputMode="numeric"
                    maxLength={10}
                    pattern="\\d{10}"
                    placeholder="9876543210"
                    className="h-12 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground outline-none focus:border-[color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
                  />
                </label>
                {error ? <p className="text-sm text-[#fca5a5]">{error}</p> : null}
                <button
                  type="submit"
                  className="mt-2 h-12 w-full rounded-2xl bg-accent px-5 text-sm font-medium tracking-wide text-black shadow-[0_18px_55px_color-mix(in_oklab,var(--color-accent)_20%,transparent)]"
                >
                  Continue to WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}

