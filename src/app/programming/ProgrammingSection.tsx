"use client";

import ScrollSnapSection from "@/components/ScrollSnapSection/Section";
import {
    NavItem,
    useProgrammingNavStore,
} from "@/lib/hooks/navStore/useProgrammingNavStore";

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
            className={className}
            useNavStore={useProgrammingNavStore}
        >
            {children}
        </ScrollSnapSection>
    );
};

export default ProgrammingSection;
