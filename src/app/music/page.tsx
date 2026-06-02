import Waveform from "./Waveform";
import MusicHero from "./MusicHero";
import AboutMe from "./about/AboutMeMusic";
import MyGear from "./gear/MyMusicGear";
import MyInfluences from "./influences/MyMusicInfluences";

const Divider = ({
    rotWave,
    needLine,
}: {
    rotWave?: boolean;
    needLine?: boolean;
}) => {
    return (
        <div
            className={`${needLine ? "mt-10 md:mt-20 lg:mt-32" : "my-10 md:my-20 lg:my-32"}`}
        >
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
        </div>
    );
};

const MusicPage = () => {
    return (
        <main className="scrollbar-music h-screen w-full overflow-y-auto scroll-smooth">
            <MusicHero />
            <div className="mt-[0.1px]" />
            <Divider />
            <AboutMe />
            <Divider rotWave />
            <MyGear />
            <Divider />
            <MyInfluences />
            <Divider needLine />
        </main>
    );
};

export default MusicPage;
