import Header from "@/components/DynamicIsland";
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
        <div className="flex flex-col items-center">
            <Header />
            <main className="mx-auto max-w-7xl mt-[clamp(1.5rem,2vw+1.5rem,4.5rem)]">
                {children}
            </main>
        </div>
    );
};

export default ProgrammingLayout;
