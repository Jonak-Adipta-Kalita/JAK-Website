import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Influence } from "./page";

const InfluenceCard = ({
    influence,
    card,
}: {
    influence: Influence;
    card?: boolean;
}) => {
    const [fav_songs, fav_song_note] = influence.fav_songs
        ? influence.fav_songs.reduce<[string[], string | undefined]>(
              ([songs, note], song) => {
                  if (song.startsWith("...")) return [songs, song];
                  return [[...songs, song], note];
              },
              [[], undefined]
          )
        : [null, null];

    return (
        <div
            className={`relative flex w-full gap-x-15 rounded-xl border-[0.1px] border-zinc-800 bg-zinc-800/30 bg-clip-padding p-5 backdrop-blur-xl ${card ? "min-h-120" : ""}`}
        >
            <Image
                draggable={false}
                src={influence.image}
                alt={influence.name}
                fill
                className="rounded-lg object-cover object-center opacity-40 blur lg:opacity-20"
            />
            <div
                className={`relative inset-0 hidden basis-2/5 ${!card ? "lg:flex" : ""} lg:h-80 lg:w-90 xl:h-100 xl:w-110 xl:basis-4/8 2xl:h-110 2xl:w-150`}
            >
                <Image
                    src={influence.image}
                    alt={influence.name}
                    fill
                    className="rounded-lg object-cover object-center"
                />
            </div>
            <div
                className={`z-50 flex flex-col space-y-10 ${!card ? "lg:basis-3/5 xl:basis-4/8 xl:p-5" : ""}`}
            >
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={influence.url}
                >
                    <p className="text-fg-music-text font-metal-mania decoration-fg-music-muted cursor-pointer text-3xl font-bold decoration-wavy decoration-2 underline-offset-4 hover:underline lg:text-[40px]">
                        {influence.name}
                    </p>
                </Link>
                <div className="space-y-5">
                    <motion.ul
                        className="ml-5 list-outside list-disc space-y-4 text-justify font-semibold"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0,
                                },
                            },
                        }}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                    >
                        {influence.extra.map((item, i) => (
                            <motion.li
                                key={i}
                                className="cursor-text text-base md:text-xl"
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
                        {influence.fav_songs && (
                            <motion.li
                                className="cursor-text text-base md:text-xl"
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
                                <span className="decoration-fg-music-neon-blue font-bold underline decoration-wavy decoration-2 underline-offset-4">
                                    Fav Songs
                                </span>
                                :{" "}
                                <span className="font-bold">
                                    {fav_songs!.join(", ")}
                                </span>
                                {fav_song_note && (
                                    <ul className="ml-4 font-normal">
                                        {fav_song_note}
                                    </ul>
                                )}
                            </motion.li>
                        )}
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};

export default InfluenceCard;
