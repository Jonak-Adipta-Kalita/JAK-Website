import "./globals.css";

import type { Metadata } from "next";
import { Salsa, Ubuntu_Sans } from "next/font/google";

import GotoLobbyButton from "@/app/GotoLobbyButton";
import Providers from "./Providers";
import CommandPalette from "@/components/CommandPalette";
import SettingsPanel from "@/components/SettingsPanel";

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
                className={`${salsa.variable} ${ubuntuSans.variable} relative antialiased`}
                id="dark"
            >
                <GotoLobbyButton />
                <CommandPalette />
                <SettingsPanel />
                <Providers>
                    <div className="overflow-hidden">{children}</div>
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
