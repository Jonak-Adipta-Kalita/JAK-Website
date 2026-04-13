import ScrollSnapSection from "@/components/ScrollSnapSection";
import {
    NavItem,
    useProgrammingNavStore,
} from "@/lib/hooks/navStore/useProgrammingNavStore";

const ProgrammingScrollSnapSection = ({
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

export default ProgrammingScrollSnapSection;
