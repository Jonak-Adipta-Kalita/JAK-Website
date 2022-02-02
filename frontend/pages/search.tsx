import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useRouter } from "next/router";
import { Game, Picture } from "../typings";
import { GetServerSideProps } from "next";

interface Props {
    gameOwnResultsFound: Game[];
    gameFavResultsFound: Game[];
    picturesResultsFound: Picture[];
}

const Search = ({
    gameOwnResultsFound,
    gameFavResultsFound,
    picturesResultsFound,
}: Props) => {
    const {
        query: { query },
    } = useRouter();

    return (
        <div className="flex h-screen flex-col bg-[#272934] text-gray-300">
            <Head>
                <title>JAK Website | Search {query}</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mt-5 flex space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    {gameOwnResultsFound.length !== 0 ||
                    gameFavResultsFound.length !== 0 ||
                    picturesResultsFound.length !== 0 ? (
                        <div className="pl-20">
                            <h1 className="mb-6">Results: </h1>
                            {gameOwnResultsFound.length !== 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                    {gameOwnResultsFound.map((game) => (
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
                            )}
                            {gameFavResultsFound.length !== 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                    {gameFavResultsFound.map((game) => (
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
                            )}
                            {picturesResultsFound.length !== 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {picturesResultsFound.map((picture) => (
                                        <div
                                            className="m-4 flex transform cursor-pointer flex-col items-center justify-center rounded border-[0.1px] p-4 pb-2 transition duration-100 ease-out hover:scale-105"
                                            key={picture.id}
                                        >
                                            <img
                                                src={picture.image}
                                                alt=""
                                                className="rounded"
                                                loading="lazy"
                                            />
                                            <h1 className="font-justify mt-2">
                                                {picture.name}
                                            </h1>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="">
                            <span className="">
                                Your search - <b>{query}</b> - did not match any
                                Documents!!
                            </span>
                            <div className="mt-[20px]">
                                <p className="">Suggestions:</p>
                                <ul className="ml-7">
                                    <li>&#8226; Try different Keywords!!</li>
                                    <li>
                                        &#8226; Make sure that all words are
                                        spelled Correctly!!
                                    </li>
                                    <li>&#8226; Try more general Keywords!!</li>
                                    <li>&#8226; Try fewer Keywords!!</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query: string = context.query.query
        ? String(context.query.query)
        : "";
    const picturesResultsFound: Picture[] = [];
    const gameOwnResultsFound: Game[] = [];
    const gameFavResultsFound: Game[] = [];

    const pictures = await (
        await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/my_photos?format=json`
        )
    ).json();
    const favGames = await (
        await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/games/fav?format=json`
        )
    ).json();
    const ownGames = await (
        await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/games/own?format=json`
        )
    ).json();

    pictures
        .filter((picture: Picture) => picture.name.includes(query!))
        .map((picture: Picture) => picturesResultsFound.push(picture));
    ownGames
        .filter((game: Game) => game.name.includes(query!))
        .map((game: Game) => gameOwnResultsFound.push(game));
    favGames
        .filter((game: Game) => game.name.includes(query!))
        .map((game: Game) => gameFavResultsFound.push(game));

    return {
        props: {
            picturesResultsFound,
            gameOwnResultsFound,
            gameFavResultsFound,
        },
    };
};
