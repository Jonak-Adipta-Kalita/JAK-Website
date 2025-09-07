import LobbyPortals from "@/app/LobbyPortals";

const quotes = [
    "Fueled by code, books, and guitar riffs — life's better with friends who get it",
    "Coding by day, jamming by night, always up for a new adventure with the crew",
    "In between the lines of code and the pages of books, you'll find the best stories",
    "Strumming strings, turning pages, and hacking together the next big thing",
    "Why choose between books, beats, and bytes when you can have them all?",
    "Geek out, rock out, and hang out — because life's better when you mix it up",
    "Code, chords, and camaraderie — my kind of trifecta",
    "Lost in code, found in stories, and always ready to jam with the squad",
    "Books, beats, and binaries — balancing the nerd life with style",
    "Writing code, making music, and sharing the best moments with the best people",
    "From algorithms to anthems, life's a mix of tech and tunes with friends in the loop",
];

const HomePage = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        // TODO: Setup Tailwind Dark & Light Mode for the 2 types of Portals :D

        <div className="relative h-screen w-screen overflow-hidden">
            <div className="absolute top-0 left-0 z-[-1] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,var(--color-bg-lobby)_1px)] bg-[size:20px_20px]"></div>

            <main className="flex h-full max-h-screen flex-col">
                <div className="font-salsa my-[clamp(1.5rem,2vw+1.5rem,4.5rem)] space-y-5 text-center">
                    <p className="text-fg-extradark mx-5 text-[clamp(1.617rem,0.606vw+1.459rem,1.75rem)] leading-[1] tracking-[clamp(-5px,-0.28vw-1px,-1px)] sm:text-[2.5rem] md:text-[clamp(3rem,2.92vw+1.6rem,4.4rem)]">
                        Gamer && Programmer && Musician
                    </p>
                    <p className="text-fg-extralight mx-5 mt-2 text-center text-[clamp(1rem,0.6vw+0.7rem,1.1rem)] leading-snug tracking-tight sm:text-[clamp(1.2rem,0.8vw+0.3rem,1.3rem)] sm:tracking-normal md:text-[clamp(1.2rem,0.8vw+1rem,1.6rem)] xl:mt-5">
                        A High-School{" "}
                        <span className="opacity-60">(wannabe)</span>{" "}
                        <span className="text-gradient">Polymath</span> who
                        likes to Code
                    </p>
                </div>

                <LobbyPortals />

                <p className="mx-7 my-[clamp(0.5rem,2vw+1.5rem,2rem)] text-center text-xl text-[clamp(0.8125rem,1vw+0.625rem,1.375rem)] font-bold">
                    <span className="text-fg-dark">&quot;</span>
                    <span className="text-gradient">{quote}</span>
                    <span className="text-fg-extradark">&quot;</span>
                </p>
            </main>
        </div>
    );
};

export default HomePage;
