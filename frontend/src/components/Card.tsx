import { ExternalLinkIcon } from "@heroicons/react/outline";
import Image from "next/image";

interface Props {
    title: string;
    description: string;
    centerMain?: boolean;
    button?: {
        title: string;
        onClick(): void;
    };
    link?: {
        title: string;
        target: string;
        url: string;
    };
    image?: string;
}

const Card = ({
    title,
    description,
    button,
    link,
    image,
    centerMain,
}: Props) => {
    return (
        <div
            className={`m-2 mb-[20px] flex ${
                centerMain && "justify-center"
            } border-[0.1px]`}
        >
            <div className="block max-w-sm rounded-lg  p-6 p-4 shadow-lg">
                {image && (
                    <Image
                        src={image}
                        className="rounded"
                        height={270}
                        width={500}
                    />
                )}
                <p
                    className={`mb-2 text-xl font-medium leading-tight text-gray-200 ${
                        image && "mt-[20px]"
                    }`}
                >
                    {title}
                </p>
                <p className="mb-4 text-base text-gray-400">{description}</p>
                {button && (
                    <button
                        type="button"
                        className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                        onClick={() => button.onClick()}
                        aria-label={button.title}
                    >
                        {button.title}
                    </button>
                )}
                {link && (
                    <a
                        href={link.url}
                        className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                        target={link.target}
                    >
                        <div className="flex">
                            {link.title}
                            {link.target === "_blank" && (
                                <ExternalLinkIcon className="ml-2 h-5 w-5" />
                            )}
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
