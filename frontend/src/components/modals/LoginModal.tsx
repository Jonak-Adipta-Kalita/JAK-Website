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
import toast from "react-hot-toast";
import toastDefaultOptions from "../../utils/toastDefaultOptions";
import { isDark } from "../../utils/isDark";

const LoginModal = () => {
    const [open, setOpen] = useRecoilState(loginModalState);
    const [showPassword, setShowPassword] = useRecoilState(showPasswordState);
    const [session, setSession] = useRecoilState(sessionState);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hCaptchaToken, setHCaptchaToken] = useState("");
    const captchaRef = useRef<any>(null);

    const login = async (e: FormEvent) => {
        e.preventDefault();

        const toastNotification = toast.loading("Logging in!!", {
            ...toastDefaultOptions,
        });

        setSession({
            ...session,
            isLoading: true,
        });

        if (process.env.NODE_ENV !== "development") {
            if (!hCaptchaToken) {
                toast.error("Captcha not Found!!", {
                    ...toastDefaultOptions,
                    id: toastNotification,
                });
                return;
            }
        }

        try {
            const isEmailVerifiedRes = await axios.post(
                "/api/auth/is_email_verified",
                JSON.stringify({
                    email,
                }),
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );

            if (isEmailVerifiedRes.data.is_email_verified) {
                const loginRes = await axios.post(
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

                if (loginRes.status === 200) {
                    toast.success(loginRes.data.success, {
                        ...toastDefaultOptions,
                        id: toastNotification,
                    });

                    const load_userRes = await axios.get(`/api/auth/user`, {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    });

                    if (load_userRes.status === 200) {
                        setSession({
                            ...session,
                            user: load_userRes.data.user,
                            isAuthenticated: true,
                        });
                    }
                } else {
                    toast.error(loginRes.data.error, {
                        ...toastDefaultOptions,
                        id: toastNotification,
                    });
                }
            } else {
                toast("Verify your Email!!", {
                    ...toastDefaultOptions,
                    id: toastNotification,
                });
            }
            setUsername("");
            setPassword("");
            setEmail("");
            setOpen(false);
        } catch (error) {
            toast.error("Something went Wrong, when Loging in!!", {
                ...toastDefaultOptions,
                id: toastNotification,
            });
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
                        <div className="inline-block transform overflow-hidden rounded-lg bg-bg-color-light px-4 pt-5 pb-4 text-left align-bottom text-gray-300 shadow-xl transition-all dark:bg-bg-color-dark sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="text-text-color-light dark:text-text-color-dark">
                                        Login Form
                                    </p>
                                </div>
                                <div className="">
                                    <XCircleIcon
                                        className="h-6 w-6 cursor-pointer text-text-color-light hover:text-gray-900 dark:text-text-color-dark dark:hover:text-white"
                                        onClick={() => setOpen(false)}
                                    />
                                </div>
                            </div>
                            <div className="my-[15px] border-b-[5px] border-gray-600 dark:border-white" />
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
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="authInput"
                                    placeholder="Your Email"
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
                                            className="absolute top-5 right-7 h-6 w-6 cursor-pointer text-text-color-light dark:text-text-color-dark"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        />
                                    ) : (
                                        <EyeIcon
                                            className="absolute top-5 right-7 h-6 w-6 cursor-pointer text-text-color-light dark:text-text-color-dark"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        />
                                    )}
                                </div>
                                {process.env.NODE_ENV !== "development" && (
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
                                        theme={isDark ? "dark" : "light"}
                                    />
                                )}
                                <div className="flex justify-center py-[25px] text-text-color-light dark:text-text-color-dark">
                                    {!session.isLoading ? (
                                        <button
                                            type="submit"
                                            className="transform rounded-lg border-[0.1px] border-gray-600 p-4 px-7 transition duration-100 ease-out hover:scale-125 dark:border-gray-300"
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
