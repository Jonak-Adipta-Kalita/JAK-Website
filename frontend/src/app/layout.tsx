import Navbar from "@/components/Navbar";
import "@styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "JAK Website | Home",
    description: "Jonak Adipta Kalita's Website",
    manifest: "/manifest.json",
    appleWebApp: true,
    authors: [{ name: "Jonak Adipta Kalita", url: "/" }],
    // themeColor: "#272934",
    icons: "/images/favicon.png",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="flex h-screen cursor-default">
                <Navbar />
                <div className="flex-[0.776] bg-[#060913]">{children}</div>
            </body>
        </html>
    );
}
