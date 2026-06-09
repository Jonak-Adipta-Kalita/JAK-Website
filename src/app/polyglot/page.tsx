"use client";

import ScrollSnapPage from "@/components/ScrollSnapSection/Page";
import { usePolyglotNavStore } from "@/lib/hooks/navStore/usePolyglotNavStore";
import PolyglotHome from "./Home";
import PolyglotAssamese from "./Assamese";
import PolyglotHindi from "./Hindi";
import PolyglotEnglish from "./English";
import PolyglotJapanese from "./Japanese";
import PolyglotFuturePlans from "./FuturePlans";

const PolyglotPage = () => {
    return (
        <ScrollSnapPage
            scrollbarClassName="scrollbar-polyglot relative z-10 font-comfortanaa"
            useNavStore={usePolyglotNavStore}
        >
            <PolyglotHome />
            <PolyglotAssamese />
            <PolyglotHindi />
            <PolyglotEnglish />
            <PolyglotJapanese />
            <PolyglotFuturePlans />
        </ScrollSnapPage>
    );
};

export default PolyglotPage;
