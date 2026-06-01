import { create } from "zustand";

interface CommandPaletteStore {
    open: boolean;
    openPalette: () => void;
    closePalette: () => void;
}

export const useCommandPalette = create<CommandPaletteStore>((set) => ({
    open: false,
    openPalette: () => set({ open: true }),
    closePalette: () => set({ open: false }),
}));
