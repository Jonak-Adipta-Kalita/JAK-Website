import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchIcon } from "@heroicons/react/solid";

const Header = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");

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
            <div className="relative mx-auto hidden pt-2 text-gray-600 md:inline">
                <input
                    className="h-10 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <SearchIcon
                    onClick={() => {
                        if (search !== "") {
                            router.push({
                                pathname: "/search",
                                query: { query: search },
                            });
                        }
                    }}
                    className="absolute right-0 top-0 mt-4 mr-3 h-6 w-6 cursor-pointer hover:text-gray-400"
                />
            </div>
            <div className="">
                <div className="mr-4">
                    <button className="transform cursor-pointer rounded-xl border-[0.1px] border-gray-400 p-4 px-10 transition duration-100 ease-out hover:scale-125 focus:outline-none focus:ring-2">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
