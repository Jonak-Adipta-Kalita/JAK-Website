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
    styles: {
        0: {},
        1: {}
    }
};

const CARD_H = 152;
const DOT_ROW = 28;
const STOP_W = 300;
const PAD_X = 60;

const DesktopTrack = ({ stops }: Props) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const totalW = stops.length * STOP_W + PAD_X * 2;

    const onMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
        scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
        if (trackRef.current) trackRef.current.style.cursor = "grabbing";
    };
    const onMouseUp = () => {
        isDragging.current = false;
        if (trackRef.current) trackRef.current.style.cursor = "grab";
    };
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !trackRef.current) return;
        e.preventDefault();
        const x = e.pageX - trackRef.current.offsetLeft;
        trackRef.current.scrollLeft =
            scrollLeft.current - (x - startX.current) * 1.5;
    };

    return (
        <div
            ref={trackRef}
            className="overflow-x-auto select-none"
            style={{ cursor: "grab", scrollbarWidth: "none" }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
        >
            <div
                className="relative"
                style={{
                    width: `${totalW}px`,
                    height: `${CARD_H * 2 + DOT_ROW}px`,
                }}
            >
                <div
                    className="absolute"
                    style={{
                        top: `${CARD_H + DOT_ROW / 2 - 1}px`,
                        left: `${PAD_X + STOP_W / 2}px`,
                        right: `${PAD_X + STOP_W / 2}px`,
                        height: "2px",
                    }}
                >
                    <div
                        className="absolute top-0 left-0 h-full"
                        style={{
                            width: `${(nowIndex / (stops.length - 1)) * 100}%`,
                            background: "#ff1a3c",
                            boxShadow: "0 0 10px rgba(255,26,60,0.6)",
                        }}
                    />
                    <div
                        className="absolute top-0 h-full"
                        style={{
                            left: `calc(${(nowIndex / (stops.length - 1)) * 100}% - 20px)`,
                            width: "40px",
                            background:
                                "linear-gradient(to right, #ff1a3c, #ffffff, #00aaff)",
                            boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                        }}
                    />
                    <div
                        className="absolute top-0 right-0 h-full"
                        style={{
                            width: `${((stops.length - 1 - nowIndex) / (stops.length - 1)) * 100}%`,
                            background: "#00aaff",
                            opacity: 0.35,
                            boxShadow: "0 0 10px rgba(0,170,255,0.3)",
                        }}
                    />
                </div>


            </div>
        </div>
    );
};

const MobileTrack = ({ stops }: Props) => {
    return <div></div>;
};

const Roadmap = ({ stops, styles }: Props) => {
    return (
        <>
            <div className="hidden lg:block">
                <DesktopTrack stops={stops} styles={styles} />
            </div>
            <div className="block px-6 lg:hidden">
                <MobileTrack stops={stops} styles={styles} />
            </div>
        </>
    );
};

export default Roadmap;
