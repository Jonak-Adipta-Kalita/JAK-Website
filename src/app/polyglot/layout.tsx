import PageReveal from "@/components/Curtain/PageReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jonak Adipta Kalita - Polyglot Personality",
    description: "A wannabe Polymath's Polyglot Personality",
};

const PolyglotLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <PageReveal>{children}</PageReveal>;
};

export default PolyglotLayout;
