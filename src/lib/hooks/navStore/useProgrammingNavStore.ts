import { createNavStore, NavItemOf } from "@/lib/store/navStore";

export const NAV_ITEMS = [
    "About",
    "Work",
    "Journal",
    "Testimonials",
    "Contact",
] as const;

export const useProgrammingNavStore = createNavStore(NAV_ITEMS);

export type NavItem = NavItemOf<typeof useProgrammingNavStore>;
