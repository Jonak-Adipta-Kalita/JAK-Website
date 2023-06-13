const Home = async () => {
    return (
        <div className="m-auto flex max-w-6xl flex-col items-center justify-between rounded-xl p-8 shadow-2xl md:flex-row">
            <div className="space-y-4 self-start text-left">
                <p className="text-2xl font-bold text-slate-200 sm:text-[35px] md:text-[37px]">
                    Jonak Adipta Kalita
                </p>
                <p className="text-xs font-semibold text-slate-200 sm:text-base md:text-lg">
                    A Full Stack Web Developer
                </p>
                <p className="text-xs text-slate-300/50 sm:text-base">
                    I am a 15 y/o Teenager, who loves to make Cool Projects
                </p>
            </div>
            <div></div>
        </div>
    );
};

export default Home;
