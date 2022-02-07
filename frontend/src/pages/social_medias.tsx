import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";

const SocialMedias = () => {
    return (
        <div className="flex h-screen flex-col bg-[#272934] text-gray-300">
            <Head>
                <title>JAK Website | Discord Widget</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mt-5 space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    <div className="grid grid-cols-1 px-20 md:grid-cols-2 xl:grid-cols-3 xl:px-0">
                        <Card
                            title="YouTube"
                            description="Subscribe my YouTube Channel!!"
                            link={{
                                target: "_blank",
                                title: "Go to My YouTube",
                                url: "https://www.youtube.com/channel/UC6IPfVhkqfcfBZCko6Q9mnQ",
                            }}
                        />
                        <Card
                            title="Instagram"
                            description="Follow Me in Instagram!!"
                            link={{
                                target: "_blank",
                                title: "Go to My Instagram",
                                url: "https://www.instagram.com/xxjonakadiptaxx/",
                            }}
                        />
                        <Card
                            title="Reddit"
                            description="Join my Reddit Community!!"
                            link={{
                                target: "_blank",
                                title: "Go to My Reddit",
                                url: "https://www.reddit.com/r/BeastNight_TV/",
                            }}
                        />
                        <Card
                            title="Twitch"
                            description="Follow Me in Twitch!!"
                            link={{
                                target: "_blank",
                                title: "Go to My Twitch",
                                url: "https://www.twitch.tv/jonakadiptakalita_2596/",
                            }}
                        />
                        <Card
                            title="Github"
                            description="Follow Me in Github!!"
                            link={{
                                target: "_blank",
                                title: "Go to My Github",
                                url: "https://github.com/Jonak-Adipta-Kalita",
                            }}
                        />
                        <Card
                            title="Discord"
                            description="Join my Discord Community!!"
                            link={{
                                target: "_blank",
                                title: "Go to My Discord",
                                url: "https://discord.gg/S3UfGkW",
                            }}
                        />
                        <Card
                            title="Twitter"
                            description="Follow me in Twitter!!"
                            link={{
                                target: "_blank",
                                title: "Go to my Twitter",
                                url: "https://twitter.com/AdiptaJonak",
                            }}
                        />
                        <Card
                            title="Itch.io"
                            description="Follow me in Itch.io!!"
                            link={{
                                target: "_blank",
                                title: "Go to my Itch.io",
                                url: "https://jonak-adipta-kalita.itch.io/",
                            }}
                        />
                        <Card
                            title="Spotify"
                            description="Follow me in Spotify!!"
                            link={{
                                target: "_blank",
                                title: "Go to my Spotify",
                                url: "https://open.spotify.com/user/31cypdycu52u6rj3bsfcldmqrlji",
                            }}
                        />
                    </div>
                </div>
            </main>
            <LoginModal />
            <SignUpModal />
            <Footer />
        </div>
    );
};

export default SocialMedias;
