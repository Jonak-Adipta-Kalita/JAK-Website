import type { Metadata } from "next";
import { Salsa, Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import CurtainProvider from "@/components/Curtain/CurtainProvider";

const salsa = Salsa({
    weight: "400",
    variable: "--font-salsa",
    subsets: ["latin"],
});

const ubuntuSans = Ubuntu_Sans({
    variable: "--font-ubuntu-sans",
    subsets: ["latin"],
    weight: "variable",
});

export const metadata: Metadata = {
    title: "Jonak Adipta Kalita - Gamer && Programmer && Musician",
    description: "A wannabe Polymath's Website",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body
                className={`${salsa.variable} ${ubuntuSans.variable} antialiased`}
            >
                <CurtainProvider>{children}</CurtainProvider>
            </body>
        </html>
    );
};

export default RootLayout;
