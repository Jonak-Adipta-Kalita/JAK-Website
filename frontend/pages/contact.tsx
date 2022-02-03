import { FormEvent, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const sendContact = (e: FormEvent) => {
        e.preventDefault();

        if (
            name === "" ||
            email === "" ||
            message === "" ||
            phone === "" ||
            password === "" ||
            confirmPassword === "" ||
            confirmPassword !== password
        )
            return;

        if (phone.length <= 10 || !phone.startsWith("+")) {
            alert("Phone Number must be correct!!");
            return;
        }

        axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/get_token`,
                JSON.stringify({
                    username: name,
                    password: password,
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => response.data.token)
            .then((token: string) => {
                axios.post(
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
                            Authorization: `Token ${token}`,
                        },
                    }
                );
            })
            .then(() => {
                setName("");
                setPassword("");
                setConfirmPassword("");
                setEmail("");
                setMessage("");
                setPhone("");
            });
    };

    return (
        <div className="flex h-screen flex-col bg-[#272934] text-gray-300">
            <Head>
                <title>JAK Website | Contact</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
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
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="contactInput"
                        placeholder="Your Password"
                    />
                    <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="contactInput"
                        placeholder="Confirm Your Password"
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
                    <div className="py-[30px]">
                        <button
                            type="submit"
                            className="transform rounded-lg border-[0.1px] border-gray-300 p-4 transition duration-100 ease-out hover:scale-125"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
