import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DiscordWidget = () => {
    return (
        <div className="flex h-screen flex-col bg-[#272934] text-gray-300">
            <Head>
                <title>JAK Website | Discord Widget</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
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
            <Footer />
        </div>
    );
};

export default DiscordWidget;
