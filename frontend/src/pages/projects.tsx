import Head from "next/head";
import type { GetServerSideProps } from "next";
import type { GithubRepo } from "../typings";
import axios from "axios";

const ACCOUNT_NAME = "Jonak-Adipta-Kalita";

interface Props {
    repositories: GithubRepo[];
}

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
            <div className="block max-w-sm rounded-lg p-6 shadow-lg">
                <p className="mb-2 text-xl font-medium leading-tight text-gray-200">
                    {title}
                </p>
                <p className="mb-4 text-base text-gray-400">{description}</p>
                <div className="space-y-2 md:space-x-2 md:space-y-0">
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

const Projects = ({ repositories }: Props) => {
    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Projects</title>
            </Head>
            <div className="mx-auto mb-5 mt-10 space-y-4 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                <div className="pt-5">
                    <div className="grid grid-cols-1 px-20 sm:px-0 md:grid-cols-2 xl:grid-cols-3">
                        {repositories?.map((repository) => (
                            <Card
                                key={repository.id}
                                title={repository.name}
                                description={repository.description}
                                buttons={[
                                    {
                                        title: "Check Out",
                                        link: repository.homepage,
                                    },
                                    {
                                        title: "Source Code",
                                        link: repository.html_url,
                                    },
                                ]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projects;

export const getServerSideProps: GetServerSideProps = async () => {
    const URL = `https://api.github.com/users/${ACCOUNT_NAME}/repos`;
    const data = await axios.get(URL);
    const response: GithubRepo[] = await data.data;
    const repositories = response.filter(
        (repository) =>
            repository.private === false && repository.name !== ACCOUNT_NAME
    );

    return {
        props: {
            repositories,
        },
    };
};
