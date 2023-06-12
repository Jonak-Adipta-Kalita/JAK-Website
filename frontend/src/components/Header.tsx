import { api } from "@xxjonakadiptaxx/jak_javascript_package";
import { SocialIcon } from "react-social-icons";

const Header = async () => {
    const socials = (
        await new api(process.env.RAPIDAPI_KEY!).getJAK()
    ).social_medias.filter((social) => social.value !== "Discord");

    return (
        <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between p-5">
            <div className="flex items-center">
                {socials.map((social) => (
                    <SocialIcon
                        url={social.link}
                        key={social.id}
                        fgColor="gray"
                        bgColor="transparent"
                    />
                ))}
            </div>
            <div className="flex cursor-pointer flex-row items-center text-gray-300">
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <p className="hidden cursor-pointer text-sm uppercase text-gray-400 md:inline-flex">
                    Get in Touch
                </p>
            </div>
        </header>
    );
};

export default Header;
