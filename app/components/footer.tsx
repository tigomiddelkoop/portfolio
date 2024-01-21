import Pill from "./pill";
import styles from "./footer.module.scss"
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    // This might not be the best option, I want to look for a better option.
    const [buildId, setBuildId] = useState("")
    useEffect(() => {
        if (buildId == "") {
            fetch("/api/buildid").then(response => response.json().then(data => setBuildId(data.buildId)))
        }
    }, [buildId])

    const footerLink = styles.link + " dark:hover:bg-gray-700 items-center"
    const footerLinkActive = styles.link + " dark:hover:bg-gray-700 items-center bg-gray-200 dark:bg-gray-900"

    return <footer
        className={"align-bottom p-4 border-t border-b border-gray-100 items-center justify-center text-center dark:bg-gray-800 dark:border-gray-500 dark:text-white"}>
        <h1 className={"jetbrains text-2xl py-2"}>tigo<span className={"text-red-700"}>.</span>tech</h1>

        <div className={"flex jetbrains flex-col lg:flex-row  justify-center text-center"}>
            <div className={styles.categoryContainer}>
                <p className={styles.categoryTitle + " jetbrains"}>My other projects</p>
                <a className={footerLinkActive + " jetbrains"} href={"https://tigo.tech"}>tigo<span className={"text-red-700"}>.</span>tech</a>
                <a className={footerLink + " jetbrains"} href={"https://genericdevelopment.nl"}>GenericDevelopment</a>
                <a className={footerLink + " jetbrains"} href={"https://systemmanager.io"}>SystemManager Core</a>
            </div>

            <div className={styles.categoryContainer}>
                <div>
                    <p className={styles.categoryTitle + " jetbrains"}>Socials</p>
                </div>
                <div className={styles.socialMediaCategory}>
                    <a className={footerLink + " jetbrains"} rel={"noreferrer noopener _blank"}
                       href={"https://github.com/tigomiddelkoop"}><FontAwesomeIcon width={16} className={"mr-1"}
                                                                                   icon={faGithub}/> GitHub</a>

                    <a className={footerLink + " jetbrains"} rel={"noreferrer noopener _blank"}
                       href={"https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"}><FontAwesomeIcon width={16}
                                                                                                        className={"mr-1"}
                                                                                                        icon={faLinkedin}/> LinkedIn</a>
                    <a className={footerLink + " jetbrains"} rel={"noreferrer noopener _blank"}
                       href={"https://discord.gg/Tx3CKJB2QY"}><FontAwesomeIcon width={16}
                                                                               className={"mr-1"}
                                                                               icon={faDiscord
                                                                               }/> Discord</a>
                </div>
            </div>

            <div className={styles.categoryContainer}>
                {/*<div className={"mb-2"}>*/}
                {/*    <p className={styles.categoryTitle + " jetbrains"}>Kubernetes info</p>*/}
                {/*</div>*/}
                <div>
                    <p className={styles.categoryTitle + " jetbrains"}>Site Build Info</p>
                    <div className={"flex items-center justify-center"}>
                        <p className={"mr-1 jetbrains"}>Build ID:</p>
                        <Pill className={"jetbrains"}>{buildId}</Pill>
                    </div>
                </div>
            </div>
        </div>
        <p className={"text-xs font-light jetbrains"}>All the pictures on this site are made by Tigo and are of the code
            of this
            site and the
            servers it is hosted on, the site might also contain pictures of projects he has done.</p>
        <p className={"text-xs font-light jetbrains"}>(I'm trying to not use any stock images, those are no fun to use.
            I want to
            make them myself)</p>
    </footer>

}