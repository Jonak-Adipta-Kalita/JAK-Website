import "../styles/globals.css";

export const metadata = {
    title: "JAK Website",
    description: "Jonak Adipta Kalita's Website",
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
