import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";

const _404 = () => {
    return (
        <div className="flex h-screen flex-col">
            <Head>
                <title>JAK Website | Page Not Found</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto  px-2 scrollbar-hide md:px-4 lg:px-6 xl:px-10">
                <div className="mt-10 flex justify-center lg:mt-[50px]">
                    <h1 className="text-2xl font-bold text-white">
                        Page Not Found!!
                    </h1>
                </div>
            </main>
            <LoginModal />
            <SignUpModal />
            <Footer />
        </div>
    );
};

export default _404;
