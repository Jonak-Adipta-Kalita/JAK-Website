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
                alert(res.data.success);
                setLoggedOut(true);
            } else {
                alert(res.data.error);
                setLoggedOut(false);
            }
        } catch (error) {
            alert("Something went worng when Logging out!!");
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
                const res = await axios.get("/api/auth/refresh", {
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (res.status === 200) {
                    const verify_res = await axios.get("/api/auth/verify", {
                        headers: {
                            Accept: "application/json",
                        },
                    });

                    if (verify_res.status === 200) {
                        const load_user_res = await axios.get(
                            `/api/auth/user`,
                            {
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                },
                            }
                        );

                        if (load_user_res.status === 200) {
                            setSession({
                                ...session,
                                user: load_user_res.data.user,
                                isAuthenticated: true,
                            });
                        }
                    } else {
                        alert("Something went wrong!!");
                    }
                } else {
                    alert("Something went wrong!!");
                }
            } catch (err) {
                // Do Nothing
            }
        };

        logic();
    }, [router, session]);

    return (
        <header className="flex items-center justify-between p-4 py-5 text-gray-400 shadow-xl md:px-10 lg:px-20">
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
                <p className="cursor-pointer font-bold text-white">
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
                    className="h-10 w-10 cursor-pointer hover:text-gray-300"
                    onClick={() => router.push("/notifications")}
                />
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
                        className="flex cursor-pointer items-center space-x-3"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <Menu
                            as="div"
                            className="relative inline-block text-left"
                        >
                            <div className="">
                                <Menu.Button className="flex items-center text-gray-400 hover:text-white">
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
                                <Menu.Items className="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md border-[0.1px] bg-[#272934] text-white shadow-lg">
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
                                                    onClick={(e) => logout(e)}
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
            </div>
        </header>
    );
};

export default Header;
