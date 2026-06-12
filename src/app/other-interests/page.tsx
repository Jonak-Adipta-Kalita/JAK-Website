"use client";

import { ForwardRefExoticComponent, RefAttributes } from "react";
import { DynaPuff } from "next/font/google";
import {
    BookTextIcon,
    Gamepad2Icon,
    LucideProps,
    SportShoeIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { Portal } from "@/components/Portals/Portal";

const font = DynaPuff({
    variable: "--font-dyna-puff",
    weight: ["400"],
    subsets: ["latin"],
});

const OTHER_INTERESTS: {
    name: string;
    url: string;
    Icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
}[] = [
    { name: "Productivity & Books", url: "/productivity", Icon: BookTextIcon },
    { name: "Gaming", url: "/gaming", Icon: Gamepad2Icon },
    { name: "Workout & Nutrition", url: "/fitness", Icon: SportShoeIcon },
];

const OtherInterestsPage = () => {
    return (
        <main className="">
            <p
                className={`py-5 text-center text-xl text-stone-700 md:py-7 md:text-4xl lg:py-10 xl:text-7xl 2xl:text-8xl @3xl:text-9xl ${font.className}`}
            >
                ...coz I like collecting hobbies
            </p>

            <div className="max-w-9xl mx-auto grid grid-cols-2 gap-5 p-5 md:mt-5 xl:mt-10 xl:grid-cols-3">
                {OTHER_INTERESTS.map((interest, i) => (
                    <Portal
                        Icon={interest.Icon}
                        name={interest.name}
                        href={interest.url}
                        mobile={false}
                        dragging={false}
                        otherInterest
                        key={i}
                    />
                ))}
            </div>
        </main>
    );
};

export default OtherInterestsPage;
