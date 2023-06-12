import Header from "@/components/Header";
import { api } from "@xxjonakadiptaxx/jak_javascript_package";

const Home = async () => {
    const socials = (
        await new api(process.env.RAPIDAPI_KEY!).getJAK()
    ).social_medias.filter((social) => social.value !== "Discord");

    return (
        <main>
            <Header socials={socials} />
        </main>
    );
};

export default Home;
