import Head from "next/head";
import Card from "../../components/Card";
import { useRouter } from "next/router";

const Games = () => {
    const router = useRouter();

    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Games</title>
            </Head>
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
    );
};

export default Games;
