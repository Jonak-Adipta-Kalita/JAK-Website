"use client";

import ScrollSnapSection from "@/components/ScrollSnapSection/Section";
import {
    NavItem,
    useProgrammingNavStore,
} from "@/lib/hooks/navStore/useProgrammingNavStore";
import { cn } from "@/lib/utils";

const ProgrammingSection = ({
    children,
    nav,
    id,
    className,
}: {
    children: React.ReactNode;
    nav?: NavItem;
    id: string;
    className?: string;
}) => {
    return (
        <ScrollSnapSection
            id={id}
            nav={nav}
            className={cn("flex w-full items-center justify-center", className)}
            useNavStore={useProgrammingNavStore}
        >
            {children}
        </ScrollSnapSection>
    );
};

export default ProgrammingSection;
