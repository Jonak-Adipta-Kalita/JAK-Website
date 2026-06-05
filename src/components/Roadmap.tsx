"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export interface Stop {
    title: string;
    year: string;
    pointers: string[];
}

interface Styles {
    track: string;
    text: string;
    pointersText: string;
    0: string;
    1: string;
    cardBg: string;
    font: string;
}

type Props = {
    stops: Stop[];
    styles: Styles;
};

const Card = ({
    styles,
    stop,
    mainColor,
}: {
    stop: Stop;
    styles: Styles;
    mainColor: string;
}) => {
    return (
        <>
            <div className="mb-2 flex items-center justify-between">
                <span
                    className={`${styles.font} text-base leading-tight lg:cursor-grab lg:text-lg`}
                    style={{ color: styles.text }}
                >
                    {stop.title}
                </span>
                <span
                    className={`${styles.font} text-base lg:cursor-grab lg:text-lg`}
                    style={{ color: mainColor }}
                >
                    {stop.year}
                </span>
            </div>
            <motion.ul
                className="font-ubuntu ml-5 list-outside list-disc space-y-2 text-justify"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.01,
                        },
                    },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {stop.pointers.map((item, i) => (
                    <motion.li
                        key={i}
                        className="font-ubuntu text-sm font-bold"
                        style={{
                            color: styles.pointersText,
                        }}
                        variants={{
                            hidden: { opacity: 0, y: 16 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </>
    );
};

const CARD_H = 250;
const DOT_ROW = 28;
const STOP_W = 450;
const PAD_X = 60;

const DesktopTrack = ({ stops, styles }: Props) => {
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
            className="scrollbar-none cursor-grab overflow-x-auto overflow-y-hidden select-none"
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
                    className="absolute h-[2px]"
                    style={{
                        top: `${CARD_H + DOT_ROW / 2 - 1}px`,
                        left: `${PAD_X + STOP_W / 2}px`,
                        right: `${PAD_X + STOP_W / 2}px`,
                        backgroundColor: styles.track,
                    }}
                />
                {stops.map((stop, i) => {
                    const isAbove = i % 2 === 0;
                    const left = PAD_X + i * STOP_W;
                    const cardTop = isAbove ? 0 : CARD_H + DOT_ROW;
                    const mainColor = i % 2 === 0 ? styles[0] : styles[1];

                    const cardBorder = (percent: number) => {
                        return `color-mix(in srgb, ${mainColor} ${percent}%, transparent)`;
                    };

                    return (
                        <motion.div
                            key={i}
                            className="absolute top-0 h-[100%]"
                            style={{
                                left,
                                width: STOP_W,
                            }}
                            initial={{ opacity: 0, y: isAbove ? -16 : 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.45 }}
                        >
                            <div
                                className="absolute right-0 left-0 mx-3 border p-5 transition-colors duration-300"
                                style={{
                                    top: cardTop,
                                    height: CARD_H,
                                    background: styles.cardBg,
                                    borderColor: cardBorder(50),
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.borderColor =
                                        cardBorder(75))
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.borderColor =
                                        cardBorder(50))
                                }
                            >
                                <Card
                                    styles={styles}
                                    stop={stop}
                                    mainColor={mainColor}
                                />
                            </div>

                            <div
                                className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center"
                                style={{ top: CARD_H, height: DOT_ROW }}
                            >
                                <span
                                    className="block h-3.5 w-3.5 rounded-full border-2"
                                    style={{
                                        background: styles.track,
                                        borderColor: `color-mix(in srgb, ${styles.track} 15%, transparent)`,
                                    }}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

const MobileTrack = ({ stops, styles }: Props) => {
    return (
        <div className="relative pl-8">
            <div
                className="absolute top-0 bottom-2 left-[14px] w-[2px]"
                style={{ backgroundColor: styles.track }}
            />

            <div className="flex flex-col">
                {stops.map((stop, i) => {
                    const mainColor = i % 2 === 0 ? styles[0] : styles[1];

                    const cardBorder = (percent: number) =>
                        `color-mix(in srgb, ${mainColor} ${percent}%, transparent)`;

                    return (
                        <motion.div
                            key={i}
                            className="relative flex items-start gap-4 pb-6"
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.04, duration: 0.45 }}
                        >
                            <div className="absolute top-4 -left-[23px] z-10">
                                <span
                                    className="block h-3.5 w-3.5 rounded-full border-2"
                                    style={{
                                        background: styles.track,
                                        borderColor: `color-mix(in srgb, ${styles.track} 15%, transparent)`,
                                    }}
                                />
                            </div>
                            <div
                                className="ml-2 flex-1 border p-4 transition-colors duration-300"
                                style={{
                                    background: styles.cardBg,
                                    borderColor: cardBorder(50),
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.borderColor =
                                        cardBorder(75))
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.borderColor =
                                        cardBorder(50))
                                }
                            >
                                <Card
                                    styles={styles}
                                    stop={stop}
                                    mainColor={mainColor}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

const Roadmap = ({ stops, styles }: Props) => {
    return (
        <>
            <div className="hidden lg:block">
                <DesktopTrack stops={stops} styles={styles} />
            </div>
            <div className="block lg:hidden">
                <MobileTrack stops={stops} styles={styles} />
            </div>
        </>
    );
};

export default Roadmap;
