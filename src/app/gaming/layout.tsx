import PageReveal from "@/components/Curtain/PageReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jonak Adipta Kalita - Gamer Personality",
    description: "A wannabe Polymath's Gamer Personality",
};

const GamingLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <PageReveal>{children}</PageReveal>;
};

export default GamingLayout;
