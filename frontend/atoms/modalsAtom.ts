import { atom } from "recoil";

export const loginModalState = atom({
    key: "loginModalState",
    default: false,
});

export const signUpModalState = atom({
    key: "signUpModalState",
    default: false,
});
