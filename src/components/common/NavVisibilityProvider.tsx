"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

interface NavVisibilityState {
  /** True once the user has scrolled down past HIDE_AFTER_PX without a recent scroll-up. */
  hidden: boolean;
  /** True once scrolled past the top, for border/shadow styling. */
  scrolled: boolean;
  /** Measured height (px) of the <header> element, kept live via ResizeObserver. */
  headerHeight: number;
}

const SCROLL_DELTA_THRESHOLD = 6;
const HIDE_AFTER_PX = 96;
const FALLBACK_HEADER_HEIGHT = 86;

const NavVisibilityContext = createContext<NavVisibilityState>({
  hidden: false,
  scrolled: false,
  headerHeight: FALLBACK_HEADER_HEIGHT,
});

export function NavVisibilityProvider({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(FALLBACK_HEADER_HEIGHT);
  const lastScrollY = useRef(0);

  // Single scroll listener, shared by everything that needs to react to it.
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 8);

      const delta = currentY - lastScrollY.current;
      if (Math.abs(delta) < SCROLL_DELTA_THRESHOLD) return;

      setHidden(delta > 0 && currentY > HIDE_AFTER_PX);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Measure the real <header> height instead of guessing a fixed px value,
  // so this stays correct if padding/logo size/breakpoint ever changes.
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const update = () => setHeaderHeight(header.getBoundingClientRect().height);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  return <NavVisibilityContext.Provider value={{ hidden, scrolled, headerHeight }}>{children}</NavVisibilityContext.Provider>;
}

export function useNavVisibility() {
  return useContext(NavVisibilityContext);
}
