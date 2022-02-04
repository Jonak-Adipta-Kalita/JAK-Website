import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const _500 = () => {
    return (
        <div className="flex h-screen flex-col bg-[#272934]">
            <Head>
                <title>JAK Website | 500 Error</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto bg-[#272934] px-2 scrollbar-hide md:px-4 lg:px-6 xl:px-10">
                <div className="mt-10 flex justify-center lg:mt-[50px]">
                    <h1 className="text-2xl font-bold text-white">
                        500 Error!!
                    </h1>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default _500;