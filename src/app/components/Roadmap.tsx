"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export interface Stop {
    title: string;
    year: string;
    pointers: string[];
}

type Props = {
    stops: Stop[];
};

const DesktopTrack = ({ stops }: Props) => {
    return <div></div>;
};

const MobileTrack = ({ stops }: Props) => {
    return <div></div>;
};

const Roadmap = ({ stops }: Props) => {
    return (
        <>
            <div className="hidden lg:block">
                <DesktopTrack stops={stops} />
            </div>
            <div className="block px-6 lg:hidden">
                <MobileTrack stops={stops} />
            </div>
        </>
    );
};

export default Roadmap;
