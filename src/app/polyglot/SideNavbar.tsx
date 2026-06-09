"use client";

import {
    NAV_ITEMS,
    usePolyglotNavStore,
} from "@/lib/hooks/navStore/usePolyglotNavStore";
import { DotIcon } from "lucide-react";
import { motion } from "motion/react";

const SideNavbar = () => {
    const { activeHeader, setActiveHeader, setScrollTarget } =
        usePolyglotNavStore();

    return (
        <nav className="scrollbar-hidden z-10 flex w-full basis-1/12 items-center gap-x-2 gap-y-5 overflow-x-auto sm:justify-center lg:basis-1/3 lg:flex-col lg:items-stretch lg:p-10 xl:basis-1/5 2xl:basis-1/6">
            {NAV_ITEMS.map((nav, i) => (
                <motion.div
                    key={nav}
                    className={`cursor-pointer ${activeHeader === nav ? "bg-gray-100" : "bg-gray-100/30"} rounded-xl border-[0.1px] border-gray-50 p-2 px-3 ${i === 0 || i === NAV_ITEMS.length - 1 ? "mx-2 lg:mx-0 lg:my-5" : ""} flex items-center shadow-md backdrop-blur-2xl`}
                    onClick={() => {
                        setActiveHeader(nav);
                        setScrollTarget(nav);
                    }}
                >
                    <DotIcon className="hidden h-5 w-5 text-purple-900 md:inline 2xl:h-10 2xl:w-10" />
                    <p className="font-comfortanaa cursor-pointer text-center text-base font-[700] whitespace-nowrap text-gray-700 md:text-lg lg:text-xl">
                        {nav}
                    </p>
                </motion.div>
            ))}
        </nav>
    );
};

export default SideNavbar;
