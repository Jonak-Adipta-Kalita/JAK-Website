import { useState, FormEvent, Fragment, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchIcon, ChevronDownIcon, BellIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import {
    loginModalState,
    signUpModalState,
    sessionState,
} from "../atoms/authAtom";
import { useSetRecoilState, useRecoilState } from "recoil";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import toast from "react-hot-toast";
import toastDefaultOptions from "../utils/toastDefaultOptions";

const Header = () => {
    const router = useRouter();
    const [session, setSession] = useRecoilState(sessionState);
    const [searchQuery, setSearchQuery] = useState("");
    const [loggedOut, setLoggedOut] = useState(false);
    const setLoginModalOpen = useSetRecoilState(loginModalState);
    const setSignUpModalOpen = useSetRecoilState(signUpModalState);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const search = (e: MouseEvent | FormEvent) => {
        e.preventDefault();
        if (searchQuery === "") return;
        router.push({
            pathname: "/search",
            query: { query: searchQuery },
        });
        setSearchQuery("");
    };

    const logout = async (e: any) => {
        e.preventDefault();

        const toastNotification = toast.loading("Logging out...", {
            ...toastDefaultOptions,
        });

        setSession({
            ...session,
            isLoading: true,
        });

        try {
            const res = await axios.post(
                "/api/auth/logout",
                JSON.stringify({}),
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (res.status === 200) {
                toast.success(res.data.success, {
                    ...toastDefaultOptions,
                    id: toastNotification,
                });
                setLoggedOut(true);
            } else {
                toast.error(res.data.error, {
                    ...toastDefaultOptions,
                    id: toastNotification,
                });
                setLoggedOut(false);
            }
        } catch (error) {
            toast.error("Something went worng when Logging out!!", {
                ...toastDefaultOptions,
                id: toastNotification,
            });
            setLoggedOut(false);
        }

        setSession({
            ...session,
            user: loggedOut ? null : session.user,
            isLoading: false,
            isAuthenticated: !loggedOut,
        });
    };

    useEffect(() => {
        const logic = async () => {
            try {
                const refreshRes = await axios.get("/api/auth/refresh", {
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (refreshRes.status === 200) {
                    const verifyRes = await axios.get("/api/auth/verify", {
                        headers: {
                            Accept: "application/json",
                        },
                    });

                    if (verifyRes.status === 200) {
                        const load_userRes = await axios.get(`/api/auth/user`, {
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                        const isEmailVerifiedRes = await axios.post(
                            "/api/auth/is_email_verified",
                            JSON.stringify({
                                email: load_userRes.data.user.email,
                            }),
                            {
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                },
                            }
                        );

                        if (isEmailVerifiedRes.data.is_email_verified) {
                            if (load_userRes.status === 200) {
                                setSession({
                                    ...session,
                                    user: load_userRes.data.user,
                                    isAuthenticated: true,
                                });
                            }
                        }
                    } else {
                        toast("Something went wrong!!");
                    }
                } else {
                    toast("Something went wrong!!");
                }
            } catch (err) {
                // Do Nothing
            }
        };

        logic();
    }, [router, session]);

    return (
        <header className="flex items-center justify-between p-4 py-5 text-text-color-light shadow-xl dark:text-text-color-dark md:px-10 lg:px-20">
            <div
                onClick={() => router.push("/")}
                className="flex cursor-pointer items-center space-x-4"
            >
                <Image
                    src="/images/favicon.png"
                    alt="logo"
                    height={60}
                    width={60}
                />
                <p className="cursor-pointer font-bold text-text-color-light dark:text-white">
                    JAK Website
                </p>
            </div>
            <form
                className="relative mx-auto hidden pt-2 text-gray-600 md:inline"
                onSubmit={(e) => search(e)}
            >
                <input
                    className="h-10 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                />
                <button type="submit" aria-label="search-button">
                    <SearchIcon
                        onClick={(e) => search(e)}
                        className="absolute right-0 top-0 mt-4 mr-3 h-6 w-6 cursor-pointer hover:text-gray-400"
                    />
                </button>
            </form>
            <div className="flex items-center space-x-5">
                <BellIcon
                    className="h-10 w-10 cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
                    onClick={() => router.push("/notifications")}
                />
                {session.isLoading ? (
                    <div>
                        <InfinitySpin width="100" color="#9CA3AF" />
                    </div>
                ) : (
                    <>
                        {!session.isAuthenticated ? (
                            <div className="mr-4 flex space-x-5">
                                <button
                                    className="transform cursor-pointer rounded-xl border-[0.1px] border-gray-400 p-2 px-5 transition duration-100 ease-out hover:scale-125"
                                    onClick={() => setLoginModalOpen(true)}
                                    aria-label="login"
                                >
                                    Login
                                </button>
                                <button
                                    className="transform cursor-pointer rounded-xl border-[0.1px] border-gray-400 p-2 px-5 transition duration-100 ease-out hover:scale-125"
                                    onClick={() => setSignUpModalOpen(true)}
                                    aria-label="sign-up"
                                >
                                    Sign Up
                                </button>
                            </div>
                        ) : (
                            <div
                                className="z-50 flex cursor-pointer items-center space-x-3"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <Menu
                                    as="div"
                                    className="relative inline-block text-left"
                                >
                                    <div className="">
                                        <Menu.Button className="flex items-center hover:text-gray-500 dark:hover:text-gray-300">
                                            {session.user?.username}
                                            <ChevronDownIcon
                                                className="-mr-1 ml-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md border-[0.1px] bg-bg-color-light text-white shadow-lg dark:bg-bg-color-dark z-50">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {() => (
                                                        <p
                                                            onClick={() =>
                                                                router.push(
                                                                    "/dashboard"
                                                                )
                                                            }
                                                            className="menuItem"
                                                        >
                                                            Dashboard
                                                        </p>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {() => (
                                                        <p
                                                            onClick={(e) =>
                                                                logout(e)
                                                            }
                                                            className="block cursor-pointer px-4 py-2 text-sm font-semibold text-red-700 hover:text-red-500"
                                                        >
                                                            Logout
                                                        </p>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        )}
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
