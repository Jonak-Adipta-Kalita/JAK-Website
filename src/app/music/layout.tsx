import PageReveal from "@/components/Curtain/PageReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jonak Adipta Kalita - Musician Personality",
    description: "A wannabe Polymath's Musician Personality",
};

const MusicLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <PageReveal>{children}</PageReveal>;
};

export default MusicLayout;
