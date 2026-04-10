"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { DoorOpenIcon } from "lucide-react";

const GotoLobbyButton = () => {
    const pathname = usePathname();
    const router = useRouter();

    if (pathname === "/") return <></>;

    return (
        <motion.div
            className="fixed bottom-3 left-3 z-50 cursor-pointer rounded-full border-2 border-gray-500/50 bg-black p-3 hover:bg-neutral-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
                router.push("/");
            }}
        >
            <DoorOpenIcon className="text-gray-400" />
        </motion.div>
    );
};

export default GotoLobbyButton;
