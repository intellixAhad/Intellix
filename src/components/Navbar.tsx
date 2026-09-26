"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BrandLogo from "./BrandLogo";
import Button from "@/components/Button"

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Product", href: "/product" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const SCROLL_DELTA_THRESHOLD = 6;
const HIDE_AFTER_PX = 96;

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 8);

      const delta = currentY - lastScrollY.current;

      if (Math.abs(delta) < SCROLL_DELTA_THRESHOLD) return;

      if (delta > 0 && currentY > HIDE_AFTER_PX) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close drawer automatically on route change
  useEffect(() => {
    const closeNav = () => {
      setIsOpen(false);
    };
    closeNav();
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b bg-black-01/85 backdrop-blur-md transition-transform transition-shadow duration-300 ease-out ${
          hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "border-white/20 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.6)]" : "border-white/[0.14] shadow-none"}`}
      >
        <div className="max-w-360 mx-auto flex items-center justify-between gap-5 px-5 sm:px-8 lg:px-16 py-4.5">
          <div className="flex items-center gap-2.5 shrink-0 group">
            <BrandLogo />
          </div>

          <nav className="hidden md:flex items-center gap-6.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[14px] font-medium tracking-wider py-1 transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-white-01"
                    : "text-white-01/70 hover:text-white-01 font-jetbrain"
                } group`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-white-01 transition-transform duration-300 ease-out origin-left ${
                    isActive(link.href)
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <Button title="let's talk" link="/contact" variant="primary" />

          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 border-[1.5px] border-white/34 text-white-01 shrink-0 transition-colors duration-300 hover:border-white/60"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 top-0.75 w-5 h-[1.8px] bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45 top-2.25" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.25 w-5 h-[1.8px] bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3.75 w-5 h-[1.8px] bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-2.25" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-90 bg-black/60 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 z-100 w-full max-w-sm bg-black-01 flex flex-col overflow-y-auto md:hidden transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-end px-7 py-4.5">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-10 h-10 border-[1.5px] border-white/34 text-white-01"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="grow flex flex-col items-start justify-center px-8 sm:px-10">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${80 + i * 60}ms` : "0ms" }}
              className={`w-full py-4 font-serif font-semibold text-[26px] transition-all duration-500 ease-out ${
                i !== 0 ? "border-t border-white/[0.14]" : ""
              } ${isActive(link.href) ? "text-white-01" : "text-white-01/80"} ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

<Button title="let's talk" link="/contact" variant="primary"/>
      </div>
    </>
  );
}
