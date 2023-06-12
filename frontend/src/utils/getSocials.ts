import { api } from "@xxjonakadiptaxx/jak_javascript_package";

export const getSocials = async () => {
    "use server";

    return (
        await new api(process.env.RAPIDAPI_KEY!).getJAK()
    ).social_medias.filter((social) => social.value !== "Discord");
};
