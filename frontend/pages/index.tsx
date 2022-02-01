import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Typed from "react-typed";
import Card from "../components/Card";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();

    return (
        <div className="flex h-screen flex-col bg-[#272934] text-gray-300">
            <Head>
                <title>JAK Website | Home</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mb-5 mt-10 space-y-4 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    <div className="flex justify-center">
                        <h3 className="text-3xl">
                            <Typed
                                strings={[
                                    "I'm a Programmer",
                                    "I'm a Student",
                                    "I'm an Assamese",
                                    "I'm a Designer",
                                    "I'm a Gamer",
                                    "I'm a Sushi Lover",
                                ]}
                                backSpeed={30}
                                smartBackspace={true}
                                backDelay={1500}
                                startDelay={1000}
                                typeSpeed={25}
                                loop={true}
                                className="mb-[50px] font-bold"
                            />
                        </h3>
                    </div>
                    <div className="mx-[40px] border-b-[5px]" />
                    <div className="pt-10">
                        <div className="grid grid-cols-1 px-20 sm:px-0 md:grid-cols-2 xl:grid-cols-3">
                            <Card
                                title="About"
                                description="Know about Jonak Adipta Kalita"
                                button={{
                                    title: "Link",
                                    onClick: () => router.push("/about"),
                                }}
                            />
                            <Card
                                title="Contact"
                                description="Contact Jonak Adipta Kalita"
                                button={{
                                    title: "Link",
                                    onClick: () => router.push("/contact"),
                                }}
                            />
                            <Card
                                title="Games"
                                description="Know about JAK' Games"
                                button={{
                                    title: "Link",
                                    onClick: () => router.push("/games"),
                                }}
                            />
                            <Card
                                title="Discord Widget"
                                description="Look at JAK's Discord Widget"
                                button={{
                                    title: "Link",
                                    onClick: () =>
                                        router.push("/discord_widget"),
                                }}
                            />
                            <Card
                                title="Pictures"
                                description="Look at JAK's Pictures"
                                button={{
                                    title: "Link",
                                    onClick: () => router.push("/pictures"),
                                }}
                            />
                            <Card
                                title="Social Media"
                                description="Social Medias of JAK"
                                button={{
                                    title: "Link",
                                    onClick: () =>
                                        router.push("/social_medias"),
                                }}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
