"use client";

import ScrollSnapPage from "@/components/ScrollSnapSection/Page";
import PolyglotSection from "./PolyglotSection";
import { usePolyglotNavStore } from "@/lib/hooks/navStore/usePolyglotNavStore";

const PolyglotPage = () => {
    return (
        <ScrollSnapPage
            scrollbarClassName="scrollbar-polyglot relative z-10"
            useNavStore={usePolyglotNavStore}
        >
            <PolyglotSection nav="Home" id="home">
                <p>Woohoo</p>
                <p>Woohoo</p>
            </PolyglotSection>

            <PolyglotSection nav="Assamese" id="assamese">
                <p>Woohoo</p>
            </PolyglotSection>
        </ScrollSnapPage>
    );
};

export default PolyglotPage;
