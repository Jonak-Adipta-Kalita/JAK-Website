import Roadmap, { Stop } from "@/app/components/Roadmap";
import MusicSection from "../MusicSection";

const roadmapData: Stop[] = [
    {
        title: "Tabla Classes",
        year: "2014 (Grade 1st)",
        pointers: [],
    },
    {
        title: "Mandolin Classes",
        year: "2016 (Grade 3rd)",
        pointers: [],
    },
    {
        title: "Harmonium Classes",
        year: "2019 (Grade 6th)",
        pointers: [],
    },
    {
        title: "Guitar Classes",
        year: "2020 (Grade 7th)",
        pointers: [],
    },
    {
        title: "Keyboard at School",
        year: "2021 (Grade 8th)",
        pointers: [],
    },
    {
        title: "Actual Love for Music and Guitars",
        year: "2023 (Grade 10th)",
        pointers: [],
    },
    {
        title: "Learning how to Shred",
        year: "2025 (Grade 12th)",
        pointers: [],
    },
];

export const AboutMe = () => {
    return (
        <MusicSection name="about">
            <Roadmap stops={roadmapData} />
        </MusicSection>
    );
};

export default AboutMe;
