"use client";

import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { useRouter } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Button } from "../ui/button";
import { BookIcon, Code2Icon, GuitarIcon, LanguagesIcon } from "lucide-react";

const ringColorPortal: { [key: string]: string } = {
    Programming: "ring-blue-400",
    "Music (Guitar)": "ring-rose-400",
    Polyglotism: "ring-teal-400",
    Productivity: "ring-orange-400",
};

const Portal = ({
    name,
    Icon,
    href,
    dragging,
}: {
    name: string;
    Icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    href: string;
    dragging: boolean;
}) => {
    const router = useRouter();

    return (
        <Button
            variant={"lobby"}
            size={"lobby"}
            className={cn(
                "z-40 bg-zinc-800 shadow-xl shadow-zinc-900",
                `ring-2 ${ringColorPortal[name]}`,
                "text-sm hover:p-9 hover:text-lg hover:opacity-90 active:p-7 active:text-xs active:opacity-100 sm:text-xl hover:sm:p-11 hover:sm:text-2xl active:sm:p-10 active:sm:text-xl"
            )}
            onClick={() => !dragging && router.push(href)}
        >
            <div className="flex items-center justify-center space-x-3">
                <p className="text-gradient cursor-pointer" draggable={false}>
                    {name}
                </p>
                <Icon className="text-fg-base" />
            </div>
        </Button>
    );
};

export const ProgrammingPortal = ({ dragging }: { dragging: boolean }) => (
    <Portal
        name="Programming"
        Icon={Code2Icon}
        href={"/programming"}
        dragging={dragging}
    />
);

export const MusicPortal = ({ dragging }: { dragging: boolean }) => (
    <Portal
        name="Music (Guitar)"
        Icon={GuitarIcon}
        href={"/music"}
        dragging={dragging}
    />
);

export const PolyglotPortal = ({ dragging }: { dragging: boolean }) => (
    <Portal
        name="Polyglotism"
        Icon={LanguagesIcon}
        href={"/polyglot"}
        dragging={dragging}
    />
);

export const ProductivityPortal = ({ dragging }: { dragging: boolean }) => (
    <Portal
        name="Productivity"
        Icon={BookIcon}
        href={"/productivity"}
        dragging={dragging}
    />
);
