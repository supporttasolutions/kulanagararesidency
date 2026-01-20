"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { BookNowButton } from "@/components/site/BookNowButton";

const nav = [
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-4 flex items-center justify-between rounded-full border border-border bg-[color-mix(in_oklab,var(--color-background)_78%,black)]/70 px-4 py-3 backdrop-blur"
        >
          <Link
            href="/"
            className="flex items-baseline gap-2 text-foreground"
            aria-label={`${SITE.name} home`}
          >
            <span className="font-serif text-lg tracking-wide">
              {SITE.name}
            </span>
            <span className="hidden text-xs text-muted sm:inline">
              {SITE.shortLocation}
            </span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname?.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "text-sm tracking-wide transition",
                    active ? "text-foreground" : "text-muted hover:text-foreground",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <BookNowButton variant="primary" className="px-4 py-2 text-xs sm:text-sm">
              Book on WhatsApp
            </BookNowButton>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

