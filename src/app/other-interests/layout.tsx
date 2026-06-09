import PageReveal from "@/components/Curtain/PageReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jonak Adipta Kalita - Other Interests",
    description: "A wannabe Polymath's Interests",
};

const OtherInterestsLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <PageReveal>
            <div className="h-screen bg-teal-100" id="light">
                {children}
            </div>
        </PageReveal>
    );
};

export default OtherInterestsLayout;
