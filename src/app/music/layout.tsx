import PageReveal from "@/components/Curtain/PageReveal";

const MusicLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <PageReveal>
            {children}
        </PageReveal >
    )
}

export default MusicLayout;
