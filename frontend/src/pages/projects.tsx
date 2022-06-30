import Head from "next/head";

const Card = ({
    title,
    description,
    buttons,
}: {
    title: string;
    description: string;
    buttons: [{ title: string; link: string }, { title: string; link: string }];
}) => {
    return (
        <div className="m-2 mb-[20px] flex border-[0.1px]">
            <div className="block max-w-sm rounded-lg p-6 p-4 shadow-lg">
                <p className="mb-2 text-xl font-medium leading-tight text-gray-200">
                    {title}
                </p>
                <p className="mb-4 text-base text-gray-400">{description}</p>
                <div className="space-x-2">
                    {buttons.map((button, index) => (
                        <a
                            key={index}
                            href={button.link}
                            className="inline-block cursor-pointer rounded bg-blue-600 px-6 py-2.5 text-xs font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                            aria-label={button.title}
                        >
                            {button.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Projects</title>
            </Head>
            <div className="mx-auto mb-5 mt-10 space-y-4 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                <div className="pt-5">
                    <div className="grid grid-cols-1 px-20 sm:px-0 md:grid-cols-2 xl:grid-cols-3">
                        <Card
                            title="Website"
                            description="Jonak Adipta Kalita's Website"
                            buttons={[
                                {
                                    title: "Check Out",
                                    link: "https://jonakadiptakalita.vercel.app",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Website",
                                },
                            ]}
                        />
                        <Card
                            title="Discord-Bot"
                            description="JAK's Discord Bot"
                            buttons={[
                                {
                                    title: "Dashboard",
                                    link: "https://jak-discord-bot.vercel.app",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Discord-Bot",
                                },
                            ]}
                        />
                        <Card
                            title="API"
                            description="Jonak Adipta Kalita's API"
                            buttons={[
                                {
                                    title: "RapidAPI",
                                    link: "https://rapidapi.com/Jonak-Adipta-Kalita/api/jak_api",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-API",
                                },
                            ]}
                        />
                        <Card
                            title="Python-Package"
                            description="JAK's Python Package"
                            buttons={[
                                {
                                    title: "PyPi",
                                    link: "https://pypi.org/project/beast-night-tv/",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Python-Package",
                                },
                            ]}
                        />
                        <Card
                            title="JavaScript-Package"
                            description="JAK's JavaScript Package"
                            buttons={[
                                {
                                    title: "NPM",
                                    link: "https://www.npmjs.com/package/@xxjonakadiptaxx/jak_javascript_package",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-JavaScript-Package",
                                },
                            ]}
                        />
                        <Card
                            title="Programming-Language"
                            description="JAK's Programming Language"
                            buttons={[
                                {
                                    title: "Download",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Programming-Language/releases/latest",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Programming-Language",
                                },
                            ]}
                        />
                        <Card
                            title="Mobile-App"
                            description="JAK's Mobile App"
                            buttons={[
                                {
                                    title: "Download",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Mobile-App#readme",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Mobile-App",
                                },
                            ]}
                        />
                        <Card
                            title="Command-Line-Tool"
                            description="JAK's Command Line Tool"
                            buttons={[
                                {
                                    title: "Download",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Command-Line-Tool/releases/latest",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Command-Line-Tool",
                                },
                            ]}
                        />
                        <Card
                            title="Telegram-Bot"
                            description="JAK's Telegram Bot"
                            buttons={[
                                {
                                    title: "Use It",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Telegram-Bot#use-it",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Telegram-Bot",
                                },
                            ]}
                        />
                        <Card
                            title="VSCode-Extension"
                            description="JAK's VSCode Extension"
                            buttons={[
                                {
                                    title: "Install",
                                    link: "https://marketplace.visualstudio.com/items?itemName=JAKVSCodeExtension.jak-vscode-extension",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-VSCode-Extension",
                                },
                            ]}
                        />
                        <Card
                            title="Desktop-App"
                            description="JAK's Desktop App"
                            buttons={[
                                {
                                    title: "Download",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Desktop-App/releases/latest",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Desktop-App",
                                },
                            ]}
                        />
                        <Card
                            title="Chrome-Extension"
                            description="JAK's Chrome Extension"
                            buttons={[
                                {
                                    title: "Install",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Chrome-Extension/releases/latest",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Chrome-Extension",
                                },
                            ]}
                        />
                        <Card
                            title="Minecraft-Datapack"
                            description="JAK's Minecraft Datapack"
                            buttons={[
                                {
                                    title: "Install",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Minecraft-Datapack/releases/latest",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/JAK-Minecraft-Datapack",
                                },
                            ]}
                        />
                        <Card
                            title="Github-Readme-Profile"
                            description="JAK's Github Readme Profile"
                            buttons={[
                                {
                                    title: "Check Out",
                                    link: "https://github.com/Jonak-Adipta-Kalita",
                                },
                                {
                                    title: "Source Code",
                                    link: "https://github.com/Jonak-Adipta-Kalita/Jonak-Adipta-Kalita",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projects;
