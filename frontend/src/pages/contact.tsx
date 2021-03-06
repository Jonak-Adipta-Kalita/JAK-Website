import { FormEvent, useState, useRef } from "react";
import Head from "next/head";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { sessionState } from "../atoms/authAtom";

const Contact = () => {
    const session = useRecoilValue(sessionState);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [hCaptchaToken, setHCaptchaToken] = useState("");
    const captchaRef = useRef<any>(null);

    const sendContact = (e: FormEvent) => {
        e.preventDefault();

        if (!session.isAuthenticated) {
            alert("First Login or Sign Up to send Contact!!");
            return;
        }

        if (phone.length <= 10 || !phone.startsWith("+")) {
            alert("Phone Number must be correct!!");
            return;
        }

        if (!hCaptchaToken) {
            alert("Captcha not Found!!");
            return;
        }

        axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact_jak`,
                JSON.stringify({
                    name,
                    email,
                    phone,
                    description: message,
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then(() => {
                setName("");
                setEmail("");
                setMessage("");
                setPhone("");
            });
    };

    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Contact</title>
            </Head>
            <form
                onSubmit={sendContact}
                className="mx-auto mt-5 flex flex-col items-center space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl"
            >
                <input
                    type="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="contactInput"
                    placeholder="Your Username"
                />
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="contactInput"
                    placeholder="Your Email"
                />
                <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="contactInput"
                    placeholder="Your Phone No."
                />
                <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="contactInput"
                    placeholder="Your Message"
                />
                <HCaptcha
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                    onVerify={setHCaptchaToken}
                    onLoad={() => {
                        captchaRef.current.execute();
                    }}
                    ref={captchaRef}
                    theme="dark"
                />
                <div className="py-[30px]">
                    <button
                        type="submit"
                        className="transform rounded-lg border-[0.1px] border-gray-300 p-4 transition duration-100 ease-out hover:scale-125"
                        aria-label="send-contact"
                    >
                        Send
                    </button>
                </div>
            </form>
        </main>
    );
};

export default Contact;
