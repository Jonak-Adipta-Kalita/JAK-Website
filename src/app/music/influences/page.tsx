"use client";

export interface Influence {
    name: string;
    url: string;
    fav_songs: string[];
    extra: string[];
    mbid: string
}

export interface Data {
    primaryInfluences: Influence[];
    worthyMentions: Influence[];
    heardABit: Influence[];
    youtubeInfluences: {}[];
}

const PrimaryInfluences = ({ data }: { data: Influence[] }) => {
    return <div className="">
        {data.map((influence) => (
            <div className="" key={influence.name}>

            </div>
        ))}
    </div>;
};


const InfluenceCard = ({ influence }: { influence: Influence }) => {
    return <div></div>;
};

const MusicInfluencesPage = () => {
    return (
        <main className="scrollbar-music h-screen w-full overflow-y-auto scroll-smooth"></main>
    );
};

export default MusicInfluencesPage;
export { PrimaryInfluences };
