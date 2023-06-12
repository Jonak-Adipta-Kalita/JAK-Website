import Header from "@components/Header";
import Hero from "@components/Hero";
import { api } from "@xxjonakadiptaxx/jak_javascript_package";

const Home = async () => {
    const socials = (
        await new api(process.env.RAPIDAPI_KEY!).getJAK()
    ).social_medias.filter((social) => social.value !== "Discord");

    return (
        <div className="h-screen bg-[rgb(36,36,36)] text-white">
            <Header socials={socials} />
            <section id="hero">{/* <Hero /> */}</section>
        </div>
    );
};

export default Home;
