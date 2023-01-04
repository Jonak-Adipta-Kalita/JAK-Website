import { PaperAirplaneIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { useRecoilState } from "recoil";
import { chatbotMessagesAtom } from "../atoms/chatbotMessagesAtom";
import toastDefaultOptions from "../utils/toastDefaultOptions";

const Chatbot = () => {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useRecoilState(chatbotMessagesAtom);

    const sendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const toastNotification = toast.loading("Sending message...", {
            ...toastDefaultOptions,
        });

        if (!message) {
            toast.error("Message cannot be empty!!", {
                ...toastDefaultOptions,
                id: toastNotification,
            });
            return;
        }

        setMessages((prev) => [
            ...prev,
            {
                message,
                type: "user",
            },
        ]);

        toast.success("Message sent!!", {
            ...toastDefaultOptions,
            id: toastNotification,
        });

        setMessage("");
    };

    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Alexis (Chatbot)</title>
            </Head>
            <div className="mx-auto mt-10 max-w-lg ">
                <div className="mx-4 my-2 flex h-[500px] flex-col rounded-lg border-[2px]">
                    <div className="flex-1 overflow-y-auto pb-5 scrollbar-hide">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className="mx-4 mt-2 flex flex-col space-y-2"
                            >
                                <div
                                    className={`${
                                        message.type === "user"
                                            ? "ml-auto bg-gray-200 text-gray-700"
                                            : "bg-blue-500 text-white"
                                    } m-2 w-fit rounded-lg p-4`}
                                >
                                    {message.message}
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={sendMessage} className="flex">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            type="text"
                            required
                            className="m-4 w-fit flex-1 rounded-lg p-4 outline-none"
                            placeholder="Your Message..."
                        />
                        <button
                            disabled={!message}
                            type="submit"
                            className="disabled:text-gray-500"
                        >
                            <PaperAirplaneIcon className="mr-4 h-6 w-6 rotate-90" />
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Chatbot;
