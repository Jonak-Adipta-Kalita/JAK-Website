import { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchIcon } from "@heroicons/react/solid";

const Header = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const search = (e: MouseEvent | FormEvent) => {
        e.preventDefault();
        if (searchQuery === "") return;
        router.push({
            pathname: "/search",
            query: { query: searchQuery },
        });
        setSearchQuery("");
    };

    const login = () => {};

    const signUp = () => {};

    return (
        <header className="flex items-center justify-between bg-[#272934] p-4 py-5 text-gray-400 shadow-xl md:px-10 lg:px-20">
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
                <h1 className="font-bold text-white">JAK Website</h1>
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
                <button type="submit">
                    <SearchIcon
                        onClick={(e) => search(e)}
                        className="absolute right-0 top-0 mt-4 mr-3 h-6 w-6 cursor-pointer hover:text-gray-400"
                    />
                </button>
            </form>
            <div className="">
                <div className="mr-4 flex space-x-5">
                    <button
                        className="transform cursor-pointer rounded-xl border-[0.1px] border-gray-400 p-2 px-5 transition duration-100 ease-out hover:scale-125"
                        onClick={login}
                    >
                        Login
                    </button>
                    <button
                        className="transform cursor-pointer rounded-xl border-[0.1px] border-gray-400 p-2 px-5 transition duration-100 ease-out hover:scale-125"
                        onClick={signUp}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
