import "../styles/globals.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import type { AppProps } from "next/app";
import Progressbar from "@badrap/bar-of-progress";
import Router from "next/router";
import { RecoilRoot } from "recoil";

const progress = new Progressbar({
    size: 4,
    color: "#FD5B61",
    className: "z-50",
    delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp;
