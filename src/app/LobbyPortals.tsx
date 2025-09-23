"use client";

import {
    ForwardRefExoticComponent,
    RefAttributes,
    useRef,
    useState,
} from "react";
import { Button } from "../components/ui/button";
import {
    BookIcon,
    Code2Icon,
    GuitarIcon,
    LanguagesIcon,
    LucideProps,
    SparklesIcon,
    SquareSlashIcon,
} from "lucide-react";
import FloatingDiv from "../components/FloatingDiv";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
            // TODO: Use Clamp for decreasing the size of the Portals
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

const LobbyPortals = () => {
    const anchorRef = useRef<HTMLButtonElement>(null);

    const [programmingDrag, setProgrammingDrag] = useState<boolean>(false);
    const [musicDrag, setMusicDrag] = useState<boolean>(false);
    const [polyglotDrag, setPolyglotDrag] = useState<boolean>(false);
    const [productivityDrag, setProductivityDrag] = useState<boolean>(false);

    return (
        <div className="relative mx-auto mb-5 flex max-h-[90vh] w-full max-w-4xl grow flex-col items-center justify-center">
            <div className="relative">
                <Button
                    variant={"lobby"}
                    ref={anchorRef}
                    size={"lobby"}
                    className="cursor-default"
                >
                    <span className="mr-2">
                        Explore my{" "}
                        <span className="text-gradient">Interests</span>{" "}
                    </span>{" "}
                    <SquareSlashIcon className="text-fg-dark hidden animate-pulse md:inline" />
                    <SparklesIcon className="text-fg-dark animate-pulse md:hidden" />
                </Button>
                <p className="text-fg-extralight/30 font-ubuntu absolute bottom-[-20] w-full text-center text-sm font-semibold md:hidden">
                    Desktop would&apos;ve been Better
                </p>
            </div>
            <>
                {/* TODO: Position the Floating Divs with Relative instead of Absolute | Plus, make it relative from center, and not from outside ;-; shit looks horrible bro */}
                <FloatingDiv
                    className="absolute top-10 left-10"
                    anchorRef={anchorRef!}
                    setDrag={setProgrammingDrag}
                >
                    <Portal
                        name="Programming"
                        Icon={Code2Icon}
                        href={"/programming"}
                        dragging={programmingDrag}
                    />
                </FloatingDiv>
                <FloatingDiv
                    className="absolute top-35 right-10 sm:top-10"
                    anchorRef={anchorRef!}
                    setDrag={setMusicDrag}
                >
                    <Portal
                        name="Music (Guitar)"
                        Icon={GuitarIcon}
                        href={"/music"}
                        dragging={musicDrag}
                    />
                </FloatingDiv>
                <FloatingDiv
                    className="absolute bottom-35 left-10 sm:bottom-10"
                    anchorRef={anchorRef!}
                    setDrag={setPolyglotDrag}
                >
                    <Portal
                        name="Polyglotism"
                        Icon={LanguagesIcon}
                        href={"/polyglot"}
                        dragging={polyglotDrag}
                    />
                </FloatingDiv>
                <FloatingDiv
                    className="absolute right-10 bottom-10"
                    anchorRef={anchorRef!}
                    setDrag={setProductivityDrag}
                >
                    <Portal
                        name="Productivity"
                        Icon={BookIcon}
                        href={"/productivity"}
                        dragging={productivityDrag}
                    />
                </FloatingDiv>
            </>
        </div>
    );
};

export default LobbyPortals;
