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
            <div className="flex flex-col items-center bg-bg-programming text-fg-main h-screen">
                <DynamicIsland />
                <main className="mx-auto mt-[clamp(1.5rem,2vw+1.5rem,4.5rem)] max-w-7xl">
                    {children}
                </main>
            </div>
        </PageReveal>
    );
};

export default ProgrammingLayout;
