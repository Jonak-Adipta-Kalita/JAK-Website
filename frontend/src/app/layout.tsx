import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "JAK Website",
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
            <body>{children}</body>
        </html>
    );
}