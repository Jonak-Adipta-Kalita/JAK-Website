import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Typed from "react-typed";

const Home = () => {
    return (
        <div className="flex h-screen flex-col bg-[#272934] text-gray-300">
            <Head>
                <title>JAK Website | Home</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mb-5 mt-10 space-y-4 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    <div className="flex justify-center">
                        <h3 className="text-3xl">
                            <Typed
                                strings={[
                                    "I'm a Programmer",
                                    "I'm a Student",
                                    "I'm an Assamese",
                                    "I'm a Designer",
                                    "I'm a Gamer",
                                    "I'm a Sushi Lover",
                                ]}
                                backSpeed={30}
                                smartBackspace={true}
                                backDelay={1500}
                                startDelay={1000}
                                typeSpeed={25}
                                loop={true}
                                className="mb-[50px] font-bold"
                            />
                        </h3>
                    </div>
                    <div className=""></div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
