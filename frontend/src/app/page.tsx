// import { api } from "@xxjonakadiptaxx/jak_javascript_package";

const Home = async () => {
    // const socials = (await new api(process.env.RAPIDAPI_KEY!).getJAK())
    //     .social_medias;

    return (
        <div>
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
