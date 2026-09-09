const MusicWorkPage = () => {
    return (
        <main className="scrollbar-music mx-auto h-screen w-full max-w-6xl overflow-y-auto scroll-smooth">
            <div className="mt-24 md:mt-28" />
            <p className="font-metal-mania mx-2 w-full text-center text-lg md:text-xl lg:text-3xl">
                I have'nt started doing much of Music Production yet but, I do
                occasionally post Song Covers on my YouTube Channel{" "}
                <span className="text-base md:text-lg lg:text-xl">
                    (I would love a few likes and you subscribing to the
                    channel)
                </span>
            </p>
            <div className="mx-5 mt-10 aspect-video w-full overflow-hidden rounded-xl lg:mt-20">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/videoseries?list=PLucjmUBRPionNtNiOrJWSACjcev7Fs-Uo"
                    title="YouTube playlist"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </main>
    );
};

export default MusicWorkPage;
