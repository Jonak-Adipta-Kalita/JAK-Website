"use client";

import ScrollSnapSection from "@/components/ScrollSnapSection/Section";
import { cn } from "@/lib/utils";
import {
    NavItem,
    usePolyglotNavStore,
} from "@/lib/hooks/navStore/usePolyglotNavStore";

const PolyglotSection = ({
    children,
    id,
    className,
    nav,
}: {
    children: React.ReactNode;
    nav: NavItem;
    className?: string;
    id: string;
}) => {
    return (
        <ScrollSnapSection
            id={id}
            className={cn(
                "flex h-screen items-center justify-center p-5 lg:p-10",
                className
            )}
            useNavStore={usePolyglotNavStore}
            nav={nav}
        >
            <div className="isolate h-full w-full rounded-2xl border-2 border-white/30 bg-teal-100/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-2xl will-change-transform">
                {children}
            </div>
        </ScrollSnapSection>
    );
};

export default PolyglotSection;
