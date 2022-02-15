import { atom } from "recoil";
import { User } from "../typings";

export const loginModalState = atom({
    key: "loginModalState",
    default: false,
});

export const signUpModalState = atom({
    key: "signUpModalState",
    default: false,
});

export const showPasswordState = atom({
    key: "showPasswordState",
    default: false,
});

export const sessionState = atom<{
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}>({
    key: "sessionState",
    default: {
        user: null,
        isAuthenticated: false,
        isLoading: false,
    },
});
