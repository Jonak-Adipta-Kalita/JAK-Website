import "../styles/globals.css";
import type { AppProps } from "next/app";
import Progressbar from "@badrap/bar-of-progress";
import Router from "next/router";
import { RecoilRoot } from "recoil";
import Header from "../components/Header";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import ToggleThemeButton from "../components/ToggleThemeButton";

const progress = new Progressbar({
    size: 4,
    color: "#FD5B61",
    className: "z-50",
    delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <RecoilRoot>
            <div className="flex h-screen flex-col text-text-color-light dark:text-text-color-dark">
                <Header />
                <Toaster position="top-center" reverseOrder={false} />
                <ToggleThemeButton />
                <Component {...pageProps} />
                <LoginModal />
                <SignUpModal />
                <Footer />
            </div>
        </RecoilRoot>
    );
};

export default MyApp;
