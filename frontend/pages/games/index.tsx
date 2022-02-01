import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { useRouter } from "next/router";

const Games = () => {
    const router = useRouter();

    return (
        <div className="flex h-screen flex-col bg-[#272934] text-gray-300">
            <Head>
                <title>JAK Website | Games</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mt-5 flex justify-center space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    <div className="items-center sm:flex sm:space-x-[30px] lg:space-x-[100px]">
                        <Card
                            title="My Own"
                            description="Here you'll find my own games."
                            button={{
                                title: "Link",
                                onClick: () => router.push("/games/own"),
                            }}
                        />
                        <Card
                            title="My Fav"
                            description="Here you'll find my fav games."
                            button={{
                                title: "Link",
                                onClick: () => router.push("/games/fav"),
                            }}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Games;
