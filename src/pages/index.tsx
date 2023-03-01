import Head from 'next/head';
import Button from "../components/button";
import Image from "next/image";
import SkillsCard from "../components/home/skillcard";
import {getData} from "./api/home";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Fragment} from "react";

interface CVState {
    progress: "success" | "info" | "danger";
    message?: string;

}

export default function Home({skills}) {

    return (
        <div>
            <div>
                <Head>
                    <title>Tigo Middelkoop - Home</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <main className={"dark:text-white items-center"}>

                    {/* Name & misc part */}
                    <div className={"flex flex-col space-y-2 mb-16"}>
                        {/* Name part */}

                        <div
                            className={"flex flex-wrap justify-center sm:justify-start space-x-2 sm:flex-row items-center mb-1 w-auto"}>
                            <div className="rounded-full">
                                <Image
                                    className={"rounded-full border border-gray-700 shadow-lg h-16 w-16"}
                                    alt="Tigo"
                                    src={"/img/profilepicture.png"}
                                    height={64}
                                    width={64}
                                />
                            </div>
                            <h1 className="jetbrains text-4xl md:text-5xl font-light items-center">
                                <span className={"jetbrains font-bold"}>Tigo</span>Middelkoop
                            </h1>
                        </div>

                        {/* Job function and quick summary of languages */
                        }
                        <div className={"items-start space-y-1 text-xs sm:text-left"}>
                            <p className="jetbrains dark:border-white border-red-700 border-l-4 pl-2">
                                Occupation: Fullstack Developer and Cloud Engineer
                            </p>
                            <p className="jetbrains dark:border-white border-red-700 border-l-4 pl-2">Languages: PHP,
                                JavaScript/TypeScript & Rust</p>
                            <p className="jetbrains dark:border-white border-red-700 border-l-4 pl-2">Hosting:
                                Kubernetes & Docker</p>
                        </div>

                        {/* Some socials */}
                        <div className={"flex flex-wrap space-x-1"}>
                            <a rel={"noreferrer noopener _blank"}
                               href={"https://github.com/tigomiddelkoop"}>
                                <Button color={"primary"}>
                                    <div className={"flex items-center space-x-2"}>
                                        <FontAwesomeIcon height={16} icon={faGithub}/>
                                        <span>Github</span>
                                    </div>
                                </Button>
                            </a>

                            <a rel={"noreferrer noopener _blank"}
                               href={"https://linkedin.com/in/tigo-middelkoop-92067a15b/"}>
                                <Button color={"primary"}>
                                    <div className={"flex items-center space-x-2"}>
                                        <FontAwesomeIcon height={16} icon={faLinkedin}/>
                                        <span>LinkedIn</span>
                                    </div>
                                </Button>
                            </a>

                            <a rel={"noreferrer noopener _blank"}
                               href={"https://discord.gg/Tx3CKJB2QY"}>
                                <Button color={"primary"}>
                                    <div className={"flex items-center space-x-2"}>
                                        <FontAwesomeIcon height={16} icon={faDiscord}/>
                                        <span>Discord</span>
                                    </div>
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Skills section */}
                    <div>
                        <div className={"space-y-1 text-center mb-4"}>
                            <h1 className={"jetbrains text-4xl font-light"}>
                                Tools
                                <span className={"jetbrains font-bold text-red-700"}>&</span>
                                Languages
                            </h1>
                            <h5 className={"jetbrains text-xs"}>
                                Tools & Languages I have experience with.
                            </h5>
                        </div>
                        <div
                            className={"flex gap-2 flex-row flex-wrap justify-center"}
                        >

                            {skills.map(card =>
                                <SkillsCard
                                    key={card.name}
                                    name={card.name}
                                    subname={card.subname}
                                    image={card.image}
                                    entries={card.entries}
                                />
                            )}

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const skills = await getData();

    return {props: {skills}, revalidate: 1};

}

