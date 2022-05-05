import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";

const Projects = () => {
    return (
        <div className="flex h-screen flex-col text-gray-300">
            <Head>
                <title>JAK Website | Projects</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide"></main>
            <LoginModal />
            <SignUpModal />
            <Footer />
        </div>
    );
};

export default Projects;
