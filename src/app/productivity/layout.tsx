import PageReveal from "@/components/Curtain/PageReveal"

const ProductivityLayout = ({
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

export default ProductivityLayout;
