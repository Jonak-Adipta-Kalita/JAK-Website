"use client";

import { JAK } from "@xxjonakadiptaxx/jak_javascript_package";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = ({ socials }: { socials: JAK["social_medias"] }) => {
    return (
        <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between p-5">
            <motion.div
                className="flex items-center"
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {socials.map((social) => (
                    <SocialIcon
                        className="h-[35px] w-[35px]"
                        url={social.link}
                        key={social.id}
                        fgColor="gray"
                        bgColor="transparent"
                    />
                ))}
            </motion.div>
            <motion.div
                className="flex cursor-pointer flex-row items-center text-gray-300"
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <p className="hidden cursor-pointer text-sm uppercase text-gray-400 md:inline-flex">
                    Get in Touch
                </p>
            </motion.div>
        </header>
    );
};

export default Header;
