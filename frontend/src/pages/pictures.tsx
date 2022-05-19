import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GetServerSideProps } from "next";
import { Picture } from "../typings";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";
import { api } from "@xxjonakadiptaxx/jak_javascript_package";

interface Props {
    pictures: Picture[];
}

const Pictures = ({ pictures }: Props) => {
    return (
        <div className="flex h-screen flex-col text-gray-300">
            <Head>
                <title>JAK Website | Pictures</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                {pictures.length !== 0 ? (
                    <div className="mx-auto mb-5 mt-3 space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {pictures.map((picture) => (
                                <div
                                    className="m-4 flex transform cursor-pointer flex-col items-center justify-center rounded border-[0.1px] p-4 pb-2 transition duration-100 ease-out hover:scale-105"
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
            <LoginModal />
            <SignUpModal />
            <Footer />
        </div>
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
