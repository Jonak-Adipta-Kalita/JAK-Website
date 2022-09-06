import Head from "next/head";
import SkillBar from "react-skillbars";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { api, JAK } from "@xxjonakadiptaxx/jak_javascript_package";
import { GetServerSideProps } from "next";

interface Props {
    languages: JAK["hobby"]["1"]["languages"];
    frameworks: JAK["hobby"]["1"]["frameworks"];
}

const Skills = ({ languages, frameworks }: Props) => {
    const [openLanguages, setOpenLanguages] = useState(false);
    const [openFrameworks, setOpenFrameworks] = useState(false);

    const frameworkSkillsNotToShow: string[] = ["React Native"];

    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Skills</title>
            </Head>
            <div className="mx-auto mb-5 mt-10 space-y-4 px-4 md:max-w-3xl md:px-0 lg:mt-[50px] lg:max-w-5xl">
                <div className="space-y-5">
                    <details className="space-y-5">
                        <summary
                            className="flex cursor-pointer items-center space-x-3"
                            onClick={() => setOpenLanguages(!openLanguages)}
                        >
                            {openLanguages ? (
                                <ChevronDownIcon className="h-7 w-7" />
                            ) : (
                                <ChevronRightIcon className="h-7 w-7" />
                            )}
                            <p className="cursor-pointer text-xl font-bold">
                                Languages
                            </p>
                        </summary>
                        <SkillBar
                            skills={languages.map((language) => {
                                return {
                                    type: language.value,
                                    level: language.level,
                                };
                            })}
                            colors={{
                                bar: "#3498db",
                                title: {
                                    text: "#fff",
                                    background: "#2980b9",
                                },
                            }}
                        />
                    </details>
                    <details className="space-y-5">
                        <summary
                            className="flex cursor-pointer items-center space-x-3"
                            onClick={() => setOpenFrameworks(!openFrameworks)}
                        >
                            {openFrameworks ? (
                                <ChevronDownIcon className="h-7 w-7" />
                            ) : (
                                <ChevronRightIcon className="h-7 w-7" />
                            )}
                            <p className="cursor-pointer text-xl font-bold">
                                Frameworks
                            </p>
                        </summary>
                        <SkillBar
                            skills={frameworks
                                .filter(
                                    (framework) =>
                                        !frameworkSkillsNotToShow.includes(
                                            framework.value
                                        )
                                )
                                .map((framework) => {
                                    return {
                                        type: framework.value,
                                        level: framework.level,
                                    };
                                })}
                        />
                    </details>
                </div>
            </div>
        </main>
    );
};

export default Skills;

export const getServerSideProps: GetServerSideProps = async () => {
    const languages = (await new api(process.env.RAPIDAPI_KEY!).getJAK())
        .hobby[1].languages;
    const frameworks = (await new api(process.env.RAPIDAPI_KEY!).getJAK())
        .hobby[1].frameworks;

    return {
        props: {
            frameworks,
            languages,
        },
    };
};
