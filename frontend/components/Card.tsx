interface Props {
    title: string;
    description: string;
    button?: {
        title: string;
        onClick(): void;
    };
}

const Card = ({ title, description, button }: Props) => {
    return (
        <div className="mb-[20px] flex items-center justify-center">
            <div className="block max-w-sm rounded-lg bg-[#272934] p-6 p-4 shadow-lg">
                <h5 className="mb-2 text-xl font-medium leading-tight text-gray-200">
                    {title}
                </h5>
                <p className="mb-4 text-base text-gray-400">{description}</p>
                {button && (
                    <button
                        type="button"
                        className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                        onClick={() => button.onClick()}
                    >
                        {button.title}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
