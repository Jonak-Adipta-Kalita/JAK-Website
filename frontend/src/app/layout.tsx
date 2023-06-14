import { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
    title: "JAK Website | Home",
    description: "Jonak Adipta Kalita's Website",
    manifest: "/manifest.json",
    appleWebApp: true,
    authors: [{ name: "Jonak Adipta Kalita", url: "/" }],
    themeColor: "#272934",
    icons: "/images/favicon.png",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="h-screen cursor-default overflow-x-hidden overflow-y-scroll bg-bg-color-dark p-5 text-text-color-dark scrollbar-hide selection:bg-orange-500 selection:text-white md:px-16 md:py-10">
                {children}
            </body>
        </html>
    );
}
