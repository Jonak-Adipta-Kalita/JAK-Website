import Waveform from "./Waveform";
import MusicHero from "./MusicHero";
import AboutMe from "./AboutMeMusic";
import MyGear from "./MyMusicGear";
import MyInfluences from "./MyMusicInfluences";

const Divider = ({
    rotWave,
    needLine,
}: {
    rotWave?: boolean;
    needLine?: boolean;
}) => {
    return (
        <>
            <div
                className={`h-[1px] w-full opacity-75 ${!needLine ? "md:hidden" : ""}`}
                style={{
                    background:
                        "linear-gradient(to right, var(--color-fg-music-neon-red), var(--color-fg-music-neon-blue))",
                    boxShadow: "0 0 20px var(--color-fg-music-glow-red)",
                }}
            />
            <div className={`hidden ${!needLine ? "md:inline" : ""}`}>
                <Waveform className={rotWave ? "rotate-180" : ""} />
            </div>
        </>
    );
};

const MusicPage = () => {
    return (
        <main className="scrollbar-music h-screen w-full overflow-y-auto scroll-smooth">
            <MusicHero />
            <div className="mt-[0.1px]" />
            <Divider needLine />
            <AboutMe />
            <Divider rotWave />
            <MyGear />
            <Divider />
            <MyInfluences />
        </main>
    );
};

export default MusicPage;
