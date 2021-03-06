import Head from "next/head";
import Typed from "react-typed";
import { useRouter } from "next/router";
import Card from "../components/Card";

const Home = () => {
    const router = useRouter();

    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Home</title>
            </Head>
            <div className="mx-auto mb-5 mt-10 space-y-4 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                <div className="flex justify-center">
                    <p className="text-3xl">
                        <Typed
                            strings={[
                                "I'm a Programmer",
                                "I'm a Student",
                                "I'm a Gamer",
                                "I'm a Guitarist",
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
                    </p>
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
                            description="Know about JAK's Games"
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
                                onClick: () => router.push("/discord_widget"),
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
                                onClick: () => router.push("/social_medias"),
                            }}
                        />
                        <Card
                            title="Projects"
                            description="Projects of JAK"
                            button={{
                                title: "Link",
                                onClick: () => router.push("/projects"),
                            }}
                        />
                        <Card
                            title="Skills"
                            description="Skills of JAK"
                            button={{
                                title: "Link",
                                onClick: () => router.push("/skills"),
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
