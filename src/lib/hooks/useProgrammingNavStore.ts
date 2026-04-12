import { create } from "zustand";

export const NAV_ITEMS = [
    "About",
    "Work",
    "Journal",
    "Testimonials",
    "Contact",
] as const;
export const HASH_ITEMS = new Set([
    "About",
    "Skills",
    "Testimonials",
    "Contact",
]);

export type NavItem = (typeof NAV_ITEMS)[number];

interface NavStore {
    activeHeader: NavItem | null;
    setActiveHeader: (item: NavItem | null) => void;

    isScrolling: boolean;
    setIsScrolling: (val: boolean) => void;
}

export const useProgrammingNavStore = create<NavStore>((set) => ({
    activeHeader: null,
    setActiveHeader: (item) => set({ activeHeader: item }),

    isScrolling: false,
    setIsScrolling: (val) => set({ isScrolling: val }),
}));
