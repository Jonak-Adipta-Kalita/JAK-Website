import Header from "@components/Header";
import Hero from "@components/Hero";
import { api } from "@xxjonakadiptaxx/jak_javascript_package";

const Home = async () => {
    const socials = (
        await new api(process.env.RAPIDAPI_KEY!).getJAK()
    ).social_medias.filter((social) => social.value !== "Discord");

    return (
        <main>
            <Header socials={socials} />
            <section id="hero">
                <Hero />
            </section>
        </main>
    );
};

export default Home;
