import { createNavStore, NavItemOf } from "./navStore";

export const NAV_ITEMS = [
    "Home",

    "Assamese",
    "Hindi",
    "English",
    "Japanese",

    "Future Plans",
] as const;

export const usePolyglotNavStore = createNavStore(NAV_ITEMS);

export type NavItem = NavItemOf<typeof usePolyglotNavStore>;
