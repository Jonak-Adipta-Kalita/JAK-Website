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
            <div className={`${metalMania.variable}`}>
                <MusicHeader />
                {children}
            </div>
        </PageReveal>
    );
};

export default MusicLayout;
