"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { DoorOpenIcon } from "lucide-react";

const GotoLobbyButton = () => {
    const pathname = usePathname();
    const router = useRouter();

    if (pathname === "/") return <></>;

    const theme = ["programming", "music"].includes(pathname.split("/")[1])
        ? "dark"
        : "light";

    return (
        <motion.div
            className={`fixed bottom-3 left-3 z-50 cursor-pointer rounded-full border-2 p-3 ${theme === "light" ? "border-gray-300/50 bg-white hover:bg-gray-50" : "border-gray-500/50 bg-black hover:bg-neutral-900"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
                router.push("/");
            }}
        >
            <DoorOpenIcon
                className={`${theme === "light" ? "text-neutral-500" : "text-gray-400"}`}
            />
        </motion.div>
    );
};

export default GotoLobbyButton;
