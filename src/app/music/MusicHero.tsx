import { MoveDownIcon } from "lucide-react";
import Image from "next/image";

const MusicHero = () => {
    return (
        <section
            id="#"
            className="relative flex h-screen flex-col items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0">
                <Image
                    src="/pic/music-hero.webp"
                    alt="Hero Image"
                    fill
                    priority
                    className="object-cover object-center opacity-100"
                />

                <div className="to-bg-music absolute inset-0 bg-gradient-to-b from-transparent via-transparent" />
            </div>

            <div
                className="strip-left absolute top-1/2 left-[10%] z-[2] -translate-y-1/2"
                style={{
                    width: 3,
                    height: "70%",
                    background:
                        "linear-gradient(to bottom, transparent, #ff1a3c 20%, #ff1a3c 80%, transparent)",
                    boxShadow: "0 0 20px #ff1a3c, 0 0 60px rgba(255,26,60,0.6)",
                }}
            />

            <div
                className="strip-right absolute top-1/2 right-[10%] z-[2] -translate-y-1/2"
                style={{
                    width: 3,
                    height: "70%",
                    background:
                        "linear-gradient(to bottom, transparent, #00aaff 20%, #00aaff 80%, transparent)",
                    boxShadow: "0 0 20px #00aaff, 0 0 60px rgba(0,170,255,0.6)",
                }}
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <button className="bg-fg-music-text/10 text-fg-music-glow-red flex h-12 w-12 animate-bounce cursor-default items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300">
                    <MoveDownIcon className="h-5 w-5" />
                </button>
            </div>
        </section>
    );
};

export default MusicHero;
