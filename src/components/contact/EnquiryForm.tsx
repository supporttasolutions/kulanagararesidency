"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export function EnquiryForm() {
  return (
    <form
      className="mt-6 grid gap-3 sm:grid-cols-2"
      action="/"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const fd = new FormData(form);
        const name = String(fd.get("name") ?? "");
        const phone = String(fd.get("phone") ?? "");
        const checkIn = String(fd.get("checkIn") ?? "");
        const checkOut = String(fd.get("checkOut") ?? "");
        const guests = String(fd.get("guests") ?? "");
        const roomType = String(fd.get("roomType") ?? "");
        const notes = String(fd.get("notes") ?? "");
        const href = buildWhatsAppLink({
          name,
          phone,
          checkIn,
          checkOut,
          guests,
          roomType,
          notes,
        });
        window.open(href, "_blank", "noopener,noreferrer");
      }}
    >
      {[
        { name: "name", label: "Name", placeholder: "Your name" },
        { name: "phone", label: "Phone", placeholder: "+91…" },
        { name: "checkIn", label: "Check-in", type: "date" },
        { name: "checkOut", label: "Check-out", type: "date" },
        { name: "guests", label: "Guests", placeholder: "2" },
      ].map((f) => (
        <label key={f.name} className="grid gap-1">
          <span className="text-[11px] tracking-[0.24em] uppercase text-muted">
            {f.label}
          </span>
          <input
            name={f.name}
            type={f.type ?? "text"}
            placeholder={f.placeholder}
            className="h-12 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground placeholder:text-muted outline-none focus:border-[color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
          />
        </label>
      ))}
      <label className="grid gap-1">
        <span className="text-[11px] tracking-[0.24em] uppercase text-muted">
          Room type
        </span>
        <select
          name="roomType"
          defaultValue="Deluxe"
          className="h-12 rounded-2xl border border-border bg-background/40 px-4 text-sm text-foreground outline-none focus:border-[color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
        >
          <option value="Deluxe">Deluxe</option>
          <option value="Premium">Premium</option>
          <option value="Family">Family</option>
        </select>
      </label>

      <label className="grid gap-1 sm:col-span-2">
        <span className="text-[11px] tracking-[0.24em] uppercase text-muted">
          Notes
        </span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Any request (late check-in, extra bed, etc.)"
          className="rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-[color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="h-12 w-full rounded-2xl bg-accent px-5 text-sm font-medium tracking-wide text-black shadow-[0_18px_55px_color-mix(in_oklab,var(--color-accent)_20%,transparent)]"
        >
          Open WhatsApp
        </button>
      </div>
    </form>
  );
}

