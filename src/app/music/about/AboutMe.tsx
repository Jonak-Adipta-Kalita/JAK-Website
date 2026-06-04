import Roadmap, { Stop } from "@/components/Roadmap";
import MusicSection from "../MusicSection";
import TempRoadmap from "./temp";

const roadmapData: Stop[] = [
    {
        title: "Tabla Classes",
        year: "2014 (Grade 1st)",
        pointers: [
            "Mom added me to the classes coz I was bored at home as both my parents work",
            "Set the foundation for a good sense of rhythm! (atleast thats what my guitar ma'am says)",
            "Got a B.Mus Degree in 6th Grade!",
            "Did so many performances on stage"
        ],
    },
    {
        title: "Mandolin Classes",
        year: "2016 (Grade 3rd)",
        pointers: [
            "Again, another class that mom got me in for the other weekday that I didn't have Tabla classes in",
            "I don't think I have a full bachelor degree in this; I did like 3 years of actual certificates and 2 more of performing",
            "Fun times :D",
            "Did both Western and Indian Classical music"
        ],
    },
    {
        title: "Harmonium Classes",
        year: "2018 (Grade 5th)",
        pointers: [
            "Started coz it was needed for Tabla - at a neighbours house",
            "Developed \"Relative Pitch\" in these days; learned to play so many assamese songs"
        ],
    },
    {
        title: "Keyboard at School",
        year: "2018 (Grade 5th)",
        pointers: [
            "The harmonium classes came in clutch",
            "Tagged along with Nibir for this one! He started first but I took over soon; he went for the percussions and managing the P.A. system",
            "Stayed there till 9th grade, stopped coz of 10th boards",
            "I will say, the notoreity I had at the school was from these days ;-;"
        ],
    },
    {
        title: "Guitar Classes",
        year: "2020 (Grade 7th)",
        pointers: [
            "Got surprised with my first acoustic one day suddenly by my Mandolin ma'am and she became by Guitar teacher :D",
            "Did mostly Indian Classical music stuff and not much of Western Classical music",
            "I continued till 9th-10th but stopped till 12th boards",
            "Bachelor in Music Degree :D"
        ],
    },
    {
        title: "Actual Love for Music and Guitars",
        year: "2023 (Grade 10th)",
        pointers: [
            "I was sick and bored in 10th grade August when, I decided to watch the Paul Davids' \"Electric Guitar Types\" video :D",
            "I am devoted to guitar and music for the rest of my life :D",
            "\"Tim Henson\" and \"Polyphia\" are the first influences but it could also be \"Choo Lo\" by \"The Local Train\" (Nibir sent me both ;-;)"
        ],
    },
    {
        title: "Learning how to Shred",
        year: "2025 (Grade 12th)",
        pointers: [
            "Started with learning \"Its Only Smiles\" by \"Periphery\" in April",
            "but it was \"Takayoshi Ohmura\" of \"Eastern Kami Band\" of \"BabyMetal\" who inspired me to start practicing playing Technical :D",
            "\"Bernth\"'s youtube content is what I was spamming for 5 hours a day in those days",
            "Lovely times <3"
        ],
    },
];

export const AboutMe = () => {
    return (
        <MusicSection name="about">
            <Roadmap stops={roadmapData} styles={{
                0: {}, 1: {}
            }} />
            <TempRoadmap />
        </MusicSection>
    );
};

export default AboutMe;
