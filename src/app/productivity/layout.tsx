import PageReveal from "@/components/Curtain/PageReveal"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jonak Adipta Kalita - Nerd Personality",
    description: "A wannabe Polymath's Nerd Personality",
};

const ProductivityLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <PageReveal>
            {children}
        </PageReveal>
    )
}

export default ProductivityLayout;
