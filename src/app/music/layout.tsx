import { Metadata } from "next";
import { Metal_Mania } from "next/font/google";

import PageReveal from "@/components/Curtain/PageReveal";
import MusicHeader from "./MusicHeader";

const metalMania = Metal_Mania({
    variable: "--font-metal-mania",
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Jonak Adipta Kalita - Musician Personality",
    description: "Explore JAK's Musician Personality",
};

const MusicLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <PageReveal>
            <div
                className={`${metalMania.variable} bg-bg-music relative min-h-screen overflow-x-hidden`}
            >
                <MusicHeader />
                <div
                    className="pointer-events-none fixed inset-0 z-40"
                    style={{
                        background:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
                    }}
                />
                {children}
            </div>
        </PageReveal>
    );
};

export default MusicLayout;
