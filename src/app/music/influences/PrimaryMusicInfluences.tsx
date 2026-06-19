import data from "@/data/music-influences.json";

// TODO: Componetize to ShowcaseCard

const PrimaryInfluences = () => {
    return (
        <div className="w-screen">
            {data.primaryInfluences.map((influence, i) => (
                <div className="relative" key={influence.name}>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            ))}
        </div>
    );
};

export default PrimaryInfluences;
