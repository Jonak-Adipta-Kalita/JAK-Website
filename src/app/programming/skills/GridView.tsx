"use client"

import skills from "@/data/programming-skills/data"
import Image from "next/image";

const GridView = () => {
    return <div className="grid grid-cols-4">
        {skills.languages.map((lang) => (
            <div key={lang.id} className="">
                {/*<Image src={lang.pic} alt={lang.id} height={52} width={52} />*/}
                <p>
                    {lang.name}
                </p>
                {lang.message && <p>{lang.message}</p>}
            </div>
        ))}
    </div>;
};

export default GridView;
