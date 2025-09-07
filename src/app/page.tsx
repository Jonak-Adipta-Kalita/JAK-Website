import { Button } from "@/components/ui/button";
import { GuitarIcon, SparklesIcon } from "lucide-react";

const HomePage = () => {
    return (
        // TODO: Setup Tailwind Dark & Light Mode for the 2 types of Portals :D

        <div className="relative h-screen w-screen overflow-hidden">
            <div className="absolute top-0 left-0 z-[-1] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,var(--color-bg-lobby)_1px)] bg-[size:20px_20px]"></div>

            <main className="flex h-full max-h-screen flex-col">
                <div className="font-salsa my-[clamp(1.5rem,2vw+1.5rem,4.5rem)] space-y-5 text-center">
                    <p className="text-fg-extradark mx-5 text-[clamp(1.459rem,0.606vw+1.459rem,1.75rem)] leading-[1] tracking-[clamp(-5.3px,-0.28vw-1px,-1px)] sm:text-[2.3rem] md:text-[clamp(3rem,2.92vw+1.6rem,4.4rem)]">
                        Gamer && Programmer && Musician
                    </p>
                    <p className="text-fg-extralight mt-2 text-center text-[clamp(0.8rem,0.6vw+0.7rem,1.1rem)] leading-snug tracking-tight sm:text-[1rem] sm:tracking-normal md:text-[clamp(1.2rem,0.8vw+1rem,1.6rem)] xl:mt-5">
                        A High-School (wannabe) Polymath who likes to Code
                    </p>
                </div>

                <div className="relative mx-auto mb-5 flex w-full max-w-6xl grow flex-col items-center justify-center">
                    <div className="relative">
                        <Button
                            variant={"lobby"}
                            size={"lobby"}
                            className="font-salsa text-fg-extralight shadow-bg-lobby/90 cursor-default rounded-full bg-zinc-700/50 p-10 text-2xl font-semibold shadow-xl ring ring-zinc-900 ring-offset-[0.5]"
                        >
                            <span className="mr-2">
                                Explore my{" "}
                                <span className="text-blue-300">
                                    Interests
                                </span>{" "}
                            </span>{" "}
                            <SparklesIcon className="animate-pulse" />
                        </Button>
                        <p className="absolute top-[-5] left-[-42] -rotate-45 text-xs font-bold text-blue-400">
                            Polymathy Rocks!
                        </p>
                    </div>
                    <>
                        <Button className="absolute top-0 left-0">Hello</Button>
                        <Button className="absolute top-0 right-0">
                            Hello
                        </Button>
                        <Button className="absolute bottom-0 left-0">
                            Hello
                        </Button>
                        <Button className="absolute right-0 bottom-0">
                            Hello
                        </Button>
                    </>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
