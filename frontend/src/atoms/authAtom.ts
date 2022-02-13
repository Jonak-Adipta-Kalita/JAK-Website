import { atom } from "recoil";

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

export const sessionState = atom({
    key: "sessionState",
    default: {
        user: null,
        isAuthenticated: false,
        loading: false,
        registerSuccess: false,
    },
});
