import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="flex h-screen flex-col">
            <Head>
                <title>JAK Website | Home</title>
                <link rel="icon" href="/images/favicon.png" />
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
