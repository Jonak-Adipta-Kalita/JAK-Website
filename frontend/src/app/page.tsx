// import { api } from "@xxjonakadiptaxx/jak_javascript_package";

import Navigation from "@components/Navigation";

const Home = async () => {
    // const socials = (await new api(process.env.RAPIDAPI_KEY!).getJAK())
    //     .social_medias;

    return (
        <div className="m-auto max-w-7xl space-y-10 rounded-xl p-8 shadow-2xl">
            <div className="flex items-center justify-center lg:hidden">
                <Navigation />
            </div>
            <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
                <div className="space-y-3">
                    <p className="text-2xl font-bold text-slate-200 sm:text-[35px] md:text-[37px]">
                        Jon
                        <span className="custom-underline decoration-[3px]">
                            ak Adipta Ka
                        </span>
                        lita
                    </p>
                    <p className="text-xs font-semibold text-slate-200 sm:text-base md:text-lg">
                        A Full Stack Web Developer
                    </p>
                    <p className="text-xs text-slate-300/50 sm:text-base">
                        I am a{" "}
                        <span className="custom-underline decoration-[0.2px] underline-offset-[4px]">
                            15 y/o Teenager
                        </span>
                        , who loves to make{" "}
                        <span className="custom-underline decoration-[0.2px] underline-offset-[4px]">
                            Cool Projects
                        </span>
                    </p>
                </div>
                <div className="hidden lg:inline">
                    <Navigation />
                </div>
            </div>
            {/* <div className="flex items-center justify-center space-x-5">
                {socials.map((social) => (
                    <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            alt={social.value}
                            src={"https://jak-api.vercel.app" + social.imageURL}
                            className="h-5 md:h-7 lg:h-10"
                        />
                    </a>
                ))}
            </div> */}
        </div>
    );
};

export default Home;
