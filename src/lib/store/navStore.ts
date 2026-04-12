import { create } from "zustand";
import type { StoreApi, UseBoundStore } from "zustand";

export type NavItemOf<S extends UseBoundStore<StoreApi<NavStore<any>>>> =
    S extends UseBoundStore<StoreApi<NavStore<infer T>>> ? T : never;

export interface NavStore<T extends string> {
    items: readonly T[];
    activeHeader: T | null;
    setActiveHeader: (item: T | null) => void;
    isScrolling: boolean;
    setIsScrolling: (val: boolean) => void;
}

export const createNavStore = <T extends string>(items: readonly T[]) =>
    create<NavStore<T>>((set) => ({
        items,
        activeHeader: null,
        setActiveHeader: (item) => set({ activeHeader: item }),
        isScrolling: false,
        setIsScrolling: (val) => set({ isScrolling: val }),
    }));
