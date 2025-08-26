import type { Metadata } from "next";
import { Salsa, Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/DynamicIsland";

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${salsa.variable} ${ubuntuSans.variable} antialiased flex flex-col items-center`}
            >
                <Header />
                <main className="mx-auto max-w-7xl mt-[clamp(1.5rem,2vw+1.5rem,4.5rem)]">
                    {children}
                </main>
            </body>
        </html>
    );
}
