import Waveform from "./Waveform";
import MusicHero from "./MusicHero";
import AboutMe from "./AboutMeMusic";
import MyGear from "./MyMusicGear";
import MyInfluences from "./MyMusicInfluences";

const MusicPage = () => {
    return (
        <main className="bg-bg-music scrollbar-thin scrollbar-thumb-[#7a1a2e] scrollbar-track-[#03020a] hover:scrollbar-thumb-[#ff1a3c] relative min-h-screen overflow-x-hidden scroll-smooth">
            <div
                className="pointer-events-none fixed inset-0 z-40"
                style={{
                    background:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
                }}
            />
            <MusicHero />
            {/*<Waveform />*/}
            <AboutMe />
            {/*<Waveform className="rotate-180" />*/}
            <MyGear />
            {/*<Waveform />*/}
            <MyInfluences />
        </main>
    );
};

export default MusicPage;
