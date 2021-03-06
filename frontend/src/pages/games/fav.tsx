import Head from "next/head";
import Card from "../../components/Card";
import { GetServerSideProps } from "next";
import { api } from "@xxjonakadiptaxx/jak_javascript_package";
import type { JAK } from "@xxjonakadiptaxx/jak_javascript_package";

interface Props {
    games: JAK["games"];
}

const GamesFav = ({ games }: Props) => {
    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Games | Fav</title>
            </Head>
            <div className="mx-auto mt-5 flex justify-center space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                {games.length !== 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {games.map((game) => (
                            <Card
                                key={game.id}
                                title={game.value}
                                image={`https://jak-api.vercel.app/${game.imageURL}`}
                                description={game.description}
                                link={{
                                    target: "_blank",
                                    title: `Play`,
                                    url: game.link,
                                }}
                                centerMain={true}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="font-2xl font-bold">Nothing</p>
                )}
            </div>
        </main>
    );
};

export default GamesFav;

export const getServerSideProps: GetServerSideProps = async () => {
    const games = (await new api(process.env.RAPIDAPI_KEY!).getJAK()).hobby[0]
        .games;

    return {
        props: {
            games: games,
        },
    };
};
