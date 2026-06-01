import { create } from "zustand";

interface SettingsPanelStore {
    open: boolean;
    openPanel: () => void;
    closePanel: () => void;
}

export const useSettingsPanel = create<SettingsPanelStore>((set) => ({
    open: false,
    openPanel: () => set({ open: true }),
    closePanel: () => set({ open: false }),
}));
