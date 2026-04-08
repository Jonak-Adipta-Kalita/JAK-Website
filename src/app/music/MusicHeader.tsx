"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { HomeIcon, MousePointerClickIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";

const links = ["Home", "About", "Gear", "Influences"] as const;

type NavLinkProps = {
    link: string;
} & React.ComponentPropsWithoutRef<typeof Link>;

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ link, className, onClick, ...props }, ref) => {
        const router = useRouter();

        return (
            <Link
                ref={ref}
                className="text-fg-music-muted hover:text-fg-music-text group relative text-center font-mono text-sm tracking-[3px] uppercase no-underline transition-colors md:text-lg"
                onClick={(e) => {
                    onClick?.(e);
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        if (link.toLowerCase() === "about") return;
                        router.push(`/music/${link.toLowerCase()}`);
                    }
                }}
                {...props}
            >
                {link}
                <span
                    className="bg-fg-music-neon-red absolute -bottom-1 left-0 hidden h-px w-0 transition-all duration-300 group-hover:w-full md:inline"
                    style={{
                        boxShadow: "0 0 8px var(--color-fg-music-neon-red)",
                    }}
                />
            </Link>
        );
    }
);

NavLink.displayName = "NavLink";

const MusicHeader = () => {
    return (
        <nav
            className="fixed top-0 z-50 flex w-full items-center justify-center px-15 py-5 md:justify-end"
            style={{
                background:
                    "linear-gradient(to bottom, rgba(3,2,10,0.95), transparent)",
            }}
        >
            <ul className="flex list-none gap-9">
                {links.map((link, i) => (
                    <motion.li
                        key={link}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                    >
                        {link === "Home" ? (
                            <div className="relative hidden items-center justify-center md:flex">
                                <Link href="/music">
                                    <HomeIcon
                                        className="text-fg-music-muted hover:text-fg-music-glow-red top-0 cursor-pointer"
                                        width={25}
                                        height={25}
                                    />
                                </Link>
                                <div className="ml-9 h-4 w-px bg-gray-500" />
                            </div>
                        ) : link === "About" ? (
                            <NavLink
                                link={link}
                                href={`/music#${link.toLowerCase()}`}
                            />
                        ) : (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <NavLink
                                        link={link}
                                        href={`/music#${link.toLowerCase()}`}
                                    />
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <p className="text-fg-music-glow-blue hidden items-center justify-center text-sm font-semibold md:flex">
                                        Try Ctrl/Cmd +{" "}
                                        <MousePointerClickIcon className="ml-1 text-xs" />
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        )}
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
};

export default MusicHeader;
