import Waveform from "./Waveform";
import MusicHero from "./MusicHero";
import AboutMe from "./AboutMeMusic";
import MyGear from "./MyMusicGear";
import MyInfluences from "./MyMusicInfluences";

const MusicPage = () => {
    return (
        <main className="">
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
