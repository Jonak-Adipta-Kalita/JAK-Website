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
            <body className="flex h-screen flex-col bg-bg-color-dark text-text-color-dark">
                {children}
            </body>
        </html>
    );
}
