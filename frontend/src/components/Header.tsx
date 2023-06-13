"use client";

import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between overflow-x-hidden p-5">
            <motion.div
                className="flex items-center justify-between"
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left */}
            </motion.div>
            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Right */}
            </motion.div>
        </div>
    );
};

export default Header;
