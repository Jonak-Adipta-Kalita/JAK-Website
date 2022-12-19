import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { api } from "@xxjonakadiptaxx/jak_javascript_package";
import type { JAK } from "@xxjonakadiptaxx/jak_javascript_package";

interface Props {
    pictures: JAK["pictures"];
}

const Pictures = ({ pictures }: Props) => {
    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Pictures</title>
            </Head>
            {pictures.length !== 0 ? (
                <div className="mx-auto mb-5 mt-3 space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {pictures.map((picture) => (
                            <div
                                className="m-4 flex transform cursor-pointer flex-col items-center justify-center rounded border-[0.1px] border-gray-600 p-4 pb-2 transition duration-100 ease-out hover:scale-105 dark:border-white"
                                key={picture.id}
                            >
                                <Image
                                    src={`https://jak-api.vercel.app/${picture.image}`}
                                    className="rounded"
                                    height={picture.height}
                                    width={picture.width}
                                />
                                <p className="font-justify mt-2">
                                    {picture.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="font-2xl font-bold">No Pictures!!</p>
            )}
        </main>
    );
};

export default Pictures;

export const getServerSideProps: GetServerSideProps = async () => {
    const pictures = (await new api(process.env.RAPIDAPI_KEY!).getJAK())
        .pictures;

    return {
        props: {
            pictures: pictures,
        },
    };
};
