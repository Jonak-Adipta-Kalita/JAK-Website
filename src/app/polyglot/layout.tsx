import PageReveal from "@/components/Curtain/PageReveal"

const PolyglotLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <PageReveal>
            {children}
        </PageReveal>
    )
}

export default PolyglotLayout;
