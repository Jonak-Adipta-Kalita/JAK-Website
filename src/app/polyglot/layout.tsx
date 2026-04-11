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
    return (
        <PageReveal>
            <div className="relative min-h-screen overflow-hidden bg-slate-200">
                <div className="absolute -top-[10%] -left-[5%] h-[600px] w-[600px] animate-[drift_18s_ease-in-out_infinite_alternate] rounded-full bg-indigo-300 opacity-45 blur-[120px]" />

                <div className="absolute top-[30%] -right-[10%] h-[500px] w-[500px] animate-[drift_22s_ease-in-out_infinite_alternate] rounded-full bg-pink-300 opacity-45 blur-[120px]" />

                <div className="absolute -bottom-[10%] left-[30%] h-[400px] w-[400px] animate-[drift_15s_ease-in-out_infinite_alternate] rounded-full bg-sky-300 opacity-45 blur-[120px]" />

                <div className="relative z-10">{children}</div>
            </div>
        </PageReveal>
    );
};

export default PolyglotLayout;
