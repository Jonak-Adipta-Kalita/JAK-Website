import Link from "next/link";

const HomePage = () => {
    return (
        // TODO: Setup Tailwind Dark & Light Mode for the 2 types of Portals :D

        <div className="relative h-screen w-screen overflow-hidden">
            <div className="absolute top-0 left-0 z-[-1] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,var(--color-bg-lobby)_1px)] bg-[size:20px_20px]"></div>

            <main className="h-full max-h-screen flex flex-col">
                <div className="space-y-5 mt-[clamp(1.5rem,2vw+1.5rem,4.5rem)] font-salsa text-center">
                    <p className="text-[clamp(1.459rem,0.606vw+1.459rem,1.75rem)] sm:text-[2.3rem] md:text-[clamp(3rem,2.92vw+1.6rem,4.4rem)] leading-[1] mx-5 text-fg-extradark tracking-[clamp(-5.3px,-0.28vw-1px,-1px)]">
                        Gamer && Programmer && Musician
                    </p>
                    <p className="text-[clamp(0.8rem,0.6vw+0.7rem,1.1rem)] sm:text-[1rem] md:text-[clamp(1.2rem,0.8vw+1rem,1.6rem)] text-fg-extralight tracking-tight sm:tracking-normal xl:mt-5 mt-2 text-center leading-snug">
                        A High-School (wannabe) Polymath who likes to Code
                    </p>
                </div>

                <div className="flex grow items-center justify-center flex-col">
                    {/* The Portals - "Explore my Interests" */}
                    <Link href={"/programming"}>Hello World</Link>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
