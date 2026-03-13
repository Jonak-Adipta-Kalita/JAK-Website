import DynamicIsland from "@/app/programming/DynamicIsland";
import PageReveal from "@/components/Curtain/PageReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jonak Adipta Kalita - Programmer Personality",
    description: "A wannabe Polymath's Programmer Personality",
};

const ProgrammingLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <PageReveal>
            <div className="text-fg-programming-text relative flex h-screen flex-col items-center bg-gradient-to-br from-[#030b1a] via-[#071428] to-[#12103a]">
                <div className="absolute left-1/2 -translate-x-1/2">
                    <DynamicIsland />
                </div>
                {children}
            </div>
        </PageReveal>
    );
};

export default ProgrammingLayout;
