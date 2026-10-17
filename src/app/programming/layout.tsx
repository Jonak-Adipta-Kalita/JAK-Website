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
            <div className="text-fg-programming-text bg-bg-programming-1 relative flex h-screen flex-col items-center bg-gradient-to-br">
                <div className="absolute inset-0">
                    <svg
                        className="h-full w-full"
                        viewBox="0 0 900 420"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M-60 200 C100 140, 260 280, 450 200 C620 130, 740 260, 960 180 L960 420 L-60 420 Z"
                            className="fill-bg-programming-2"
                            opacity="0.6"
                        />
                        <path
                            d="M-60 310 C100 270, 280 370, 460 305 C620 250, 720 350, 900 295 L960 310 L960 420 L-60 420 Z"
                            className="fill-bg-programming-3"
                            opacity="0.75"
                        />
                    </svg>
                </div>

                <div className="absolute left-1/2 z-50 -translate-x-1/2 lg:fixed">
                    <DynamicIsland />
                </div>
                {children}
            </div>
        </PageReveal>
    );
};

export default ProgrammingLayout;
