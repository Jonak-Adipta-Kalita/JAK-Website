"use client";

import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className="sticky top-0 z-20 flex items-center justify-between overflow-x-hidden">
            <motion.div
                className="flex items-center justify-between"
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="/favicon.ico"
                    alt="Logo"
                    className="h-20 cursor-pointer"
                />
                <div></div>
            </motion.div>
            {/* Right */}
        </div>
    );
};

export default Header;
