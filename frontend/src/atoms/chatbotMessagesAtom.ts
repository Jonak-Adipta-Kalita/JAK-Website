import { atom } from "recoil";

export const chatbotMessagesAtom = atom<
    {
        message: string;
        type: "user" | "bot";
    }[]
>({
    key: "chatbotMessagesAtom",
    default: [],
});
