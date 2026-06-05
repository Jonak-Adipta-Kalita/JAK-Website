import Roadmap, { Stop } from "@/components/Roadmap";
import MusicSection from "../MusicSection";

const roadmapData: Stop[] = [
    {
        title: "Tabla Classes",
        year: "2014 (Grade 1st)",
        pointers: [
            "Mom added me to the classes coz I was bored at home as both my parents work",
            "Set the foundation for a good sense of rhythm! (atleast thats what my guitar ma'am says)",
            "Got a B.Mus Degree in 6th Grade!",
            "Did so many performances on stage",
        ],
    },
    {
        title: "Mandolin Classes",
        year: "2016 (Grade 3rd)",
        pointers: [
            "Again, another class that mom got me in for the other weekday that I didn't have Tabla classes in",
            "I don't think I have a full bachelor degree in this; I did like 3 years of actual certificates and 2 more of performing",
            "Did both Western and Indian Classical music",
        ],
    },
    {
        title: "Harmonium Classes",
        year: "2018 (Grade 5th)",
        pointers: [
            "Started coz it was needed for Tabla - at a neighbours house",
            'Developed "Relative Pitch" in these days; learned to play so many assamese songs',
        ],
    },
    {
        title: "Keyboard at School",
        year: "2018 (Grade 5th)",
        pointers: [
            "The harmonium classes came in clutch",
            "Tagged along with Nibir for this one! He started first but I took over soon and he moved over to other stuff",
            "Stayed there till 9th grade, stopped coz of 10th boards",
            "I will say, the notoreity I had at the school was from these days ;-;",
        ],
    },
    {
        title: "Guitar Classes",
        year: "2020 (Grade 7th)",
        pointers: [
            "Got surprised with my first acoustic one day suddenly by my Mandolin ma'am and she became by Guitar teacher :D",
            "Did mostly Indian Classical music stuff and not much of Western Classical music",
            "I continued till 9th-10th but stopped till 12th boards",
            "Bachelor in Music Degree :D",
        ],
    },
    {
        title: "Actual Love for Music and Guitars",
        year: "2023 (Grade 10th)",
        pointers: [
            'I was sick and bored in 10th grade August when, I decided to watch Paul Davids\' "Electric Guitar Types" video :D',
            "I am devoted to guitar and music for the rest of my life :D",
            '"Tim Henson" and "Polyphia" are the first influences (Nibir sent me ;-;)',
        ],
    },
    {
        title: "Learning how to Shred",
        year: "2025 (Grade 12th)",
        pointers: [
            'Started with learning "Its Only Smiles" by "Periphery" in April',
            'but it was "Takayoshi Ohmura" of "Eastern Kami Band" of "BabyMetal" who inspired me to start practicing playing Technical :D',
            '"Bernth"\'s youtube content is what I was spamming for 5 hours a day in those days',
        ],
    },
];

export const AboutMe = () => {
    return (
        <MusicSection name="about">
            <Roadmap
                stops={roadmapData}
                styles={{
                    track: "var(--color-fg-music-text)",
                    text: "var(--color-fg-music-text)",
                    pointersText: "var(--color-fg-music-muted)",
                    cardBg: "var(--color-bg-music-surface)",
                    0: "var(--color-fg-music-neon-red)",
                    1: "var(--color-fg-music-neon-blue)",
                    font: "font-metal-mania",
                }}
            />
            <p className="text-fg-music-text mt-5 text-center text-lg font-semibold md:mt-10 md:text-xl lg:mt-20 lg:text-3xl">
                I can listen to any genre but{" "}
                <span className="text-fg-music-neon-blue">Metal</span> has a
                special place in my heart{" "}
                <span className="opacity-50">&#40;and I hate Jazz&#41;</span>
            </p>
        </MusicSection>
    );
};

export default AboutMe;
