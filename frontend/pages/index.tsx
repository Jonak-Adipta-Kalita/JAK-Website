import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="flex h-screen flex-col bg-[#272934] text-gray-300">
            <Head>
                <title>JAK Website | Home</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className=""></div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
