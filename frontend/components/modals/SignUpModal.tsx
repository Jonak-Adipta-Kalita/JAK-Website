import { FormEvent, Fragment, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { signUpModalState } from "../../atoms/modalsAtom";

const SignUpModal = () => {
    const [open, setOpen] = useRecoilState(signUpModalState);
    const [hCaptchaToken, setHCaptchaToken] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const captchaRef = useRef<any>(null);

    const signUp = (e: FormEvent) => {
        e.preventDefault();

        if (!hCaptchaToken) return;
    };

    return (
        <Transition show={open} as={Fragment}>
            <Dialog
                className="-pb-[10px] fixed inset-0 overflow-y-auto pt-[30px] scrollbar-hide md:z-10 md:pt-0"
                as="div"
                onClose={setOpen}
            >
                <div className="sm:-pb-40 flex min-h-[800px] items-end justify-center px-4 pb-60 pt-0 pb-20 text-center sm:block sm:min-h-screen sm:p-0 sm:pt-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <span
                        aria-hidden="true"
                        className="hidden sm:inline-block sm:h-screen sm:align-middle"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block transform overflow-hidden rounded-lg bg-gray-700 px-4 pt-5 pb-4 text-left align-bottom text-gray-300 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="">Sign Up Form</p>
                                </div>
                                <div className="">
                                    <XCircleIcon
                                        className="h-6 w-6 cursor-pointer hover:text-white"
                                        onClick={() => setOpen(false)}
                                    />
                                </div>
                            </div>
                            <div className="my-[15px] border-b-[5px]" />
                            <form
                                method="post"
                                className="flex flex-col items-center space-y-2"
                                onSubmit={signUp}
                            >
                                <input
                                    type="username"
                                    required
                                    className="authInput"
                                    placeholder="Your Username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                                <input
                                    type="first-name"
                                    required
                                    className="authInput"
                                    placeholder="Your First Name"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                                <input
                                    type="last-name"
                                    required
                                    className="authInput"
                                    placeholder="Your Last Name"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                                <input
                                    type="email"
                                    required
                                    className="authInput"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    required
                                    className="authInput"
                                    placeholder="Choose a Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <input
                                    type="password"
                                    required
                                    className="authInput"
                                    placeholder="Enter your Password again"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                                <HCaptcha
                                    sitekey={
                                        process.env
                                            .NEXT_PUBLIC_HCAPTCHA_SITE_KEY!
                                    }
                                    onVerify={setHCaptchaToken}
                                    onLoad={() => {
                                        captchaRef.current.execute();
                                    }}
                                    ref={captchaRef}
                                />
                                <div className="flex justify-center py-[25px]">
                                    <button
                                        type="submit"
                                        className="transform rounded-lg border-[0.1px] border-gray-300 p-4 px-7 transition duration-100 ease-out hover:scale-125"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default SignUpModal;
