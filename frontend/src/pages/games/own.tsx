import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { GetServerSideProps } from "next";
import { Game } from "../../typings";
import LoginModal from "../../components/modals/LoginModal";
import SignUpModal from "../../components/modals/SignUpModal";

interface Props {
    games: Game[];
}

const GamesOwn = ({ games }: Props) => {
    return (
        <div className="flex h-screen flex-col  text-gray-300">
            <Head>
                <title>JAK Website | Games | Own</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mt-5 flex justify-center space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    {games.length !== 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            {games.map((game) => (
                                <Card
                                    key={game.id}
                                    title={game.name}
                                    image={game.image}
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
            <LoginModal />
            <SignUpModal />
            <Footer />
        </div>
    );
};

export default GamesOwn;

export const getServerSideProps: GetServerSideProps = async () => {
    const req = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/games/own?format=json`
    );
    const games = await req.json();

    return {
        props: {
            games: games,
        },
    };
};
