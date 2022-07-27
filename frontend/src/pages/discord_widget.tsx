import Head from "next/head";

const DiscordWidget = () => {
    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Discord Widget</title>
            </Head>
            <div className="mx-auto mt-5 flex justify-center space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                <iframe
                    src="https://discord.com/widget?id=752800104112717826&theme=dark"
                    width="350"
                    height="500"
                    allowTransparency={true}
                    frameBorder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                ></iframe>
            </div>
        </main>
    );
};

export default DiscordWidget;
