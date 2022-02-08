import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GetServerSideProps } from "next";
import { Picture } from "../typings";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";

interface Props {
    pictures: Picture[];
}

const Pictures = ({ pictures }: Props) => {
    return (
        <div className="flex h-screen flex-col  text-gray-300">
            <Head>
                <title>JAK Website | Pictures</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mb-5 mt-3 space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {pictures.map((picture) => (
                            <div
                                className="m-4 flex transform cursor-pointer flex-col items-center justify-center rounded border-[0.1px] p-4 pb-2 transition duration-100 ease-out hover:scale-105"
                                key={picture.id}
                            >
                                <img
                                    src={picture.image}
                                    alt=""
                                    className="rounded"
                                    loading="lazy"
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
            </main>
            <LoginModal />
            <SignUpModal />
            <Footer />
        </div>
    );
};

export default Pictures;

export const getServerSideProps: GetServerSideProps = async () => {
    const req = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/my_photos?format=json`
    );
    const pictures = await req.json();

    return {
        props: {
            pictures: pictures,
        },
    };
};
