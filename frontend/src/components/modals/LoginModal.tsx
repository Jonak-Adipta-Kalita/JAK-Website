import { Fragment, useState, FormEvent, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRecoilState } from "recoil";
import {
    loginModalState,
    showPasswordState,
    sessionState,
} from "../../atoms/authAtom";
import { BallTriangle } from "react-loader-spinner";
import axios from "axios";

const LoginModal = () => {
    const [open, setOpen] = useRecoilState(loginModalState);
    const [showPassword, setShowPassword] = useRecoilState(showPasswordState);
    const [session, setSession] = useRecoilState(sessionState);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hCaptchaToken, setHCaptchaToken] = useState("");
    const captchaRef = useRef<any>(null);

    const login = async (e: FormEvent) => {
        e.preventDefault();

        setSession({
            ...session,
            isLoading: true,
        });

        if (!hCaptchaToken) {
            setSession({
                ...session,
                isLoading: false,
            });
            return;
        }

        try {
            const res = await axios.post(
                `/api/auth/login`,
                JSON.stringify({
                    username,
                    password,
                }),
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );

            if (res.status === 200) {
                alert(res.data.success);

                const load_user_res = await axios.get(`/api/auth/user`, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                });

                if (load_user_res.status === 200) {
                    setSession({
                        ...session,
                        user: load_user_res.data.user,
                        isAuthenticated: true,
                    });
                }
            } else {
                alert(res.data.error);
            }

            setUsername("");
            setPassword("");
        } catch (error) {
            alert("Something went Wrong, when Loging in!!");
        }

        setSession({
            ...session,
            isLoading: false,
        });
    };

    return (
        <Transition show={open} as={Fragment}>
            <Dialog
                className="fixed left-0 right-0 bottom-0 overflow-y-auto scrollbar-hide md:inset-0 md:z-10"
                as="div"
                onClose={setOpen}
            >
                <div className="sm:-pb-40 flex min-h-[800px] items-end justify-center px-4 pb-60 pt-0 text-center sm:block sm:min-h-screen sm:p-0 sm:pt-4">
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
                                    <p className="">Login Form</p>
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
                                onSubmit={login}
                                method="post"
                                className="flex flex-col items-center space-y-2"
                            >
                                <input
                                    type="name"
                                    required
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="authInput"
                                    placeholder="Your Username"
                                />
                                <div className="relative">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        required
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className="authInput"
                                        placeholder="Your Password"
                                        minLength={8}
                                    />
                                    {showPassword ? (
                                        <EyeOffIcon
                                            className="absolute top-5 right-7 h-6 w-6 cursor-pointer"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        />
                                    ) : (
                                        <EyeIcon
                                            className="absolute top-5 right-7 h-6 w-6 cursor-pointer"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        />
                                    )}
                                </div>
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
                                    theme="dark"
                                />
                                <div className="flex justify-center py-[25px]">
                                    {!session.isLoading ? (
                                        <button
                                            type="submit"
                                            className="transform rounded-lg border-[0.1px] border-gray-300 p-4 px-7 transition duration-100 ease-out hover:scale-125"
                                            aria-label="login"
                                        >
                                            Login
                                        </button>
                                    ) : (
                                        <BallTriangle
                                            color="#D1D5DB"
                                            height={80}
                                            width={80}
                                        />
                                    )}
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default LoginModal;
