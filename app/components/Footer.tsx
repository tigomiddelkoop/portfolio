"use client"

import styles from "./footer.module.scss"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faDiscord,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import Separator from "@/app/components/Separator"

export default function Footer(): React.JSX.Element {

    const footerLink = styles.link + " dark:hover:bg-pink-700 items-center"
    const footerLinkActive =
        styles.link +
        " dark:hover:bg-pink-700 items-center border border-rounded border-white"

    return (
        <footer>
            <Separator classNames={"mt-2"} />
            <div
                className={
                    "items-center border-gray-100 p-4 text-center align-bottom text-white backdrop-blur-3xl dark:border-gray-500"
                }
            >
                <h1
                    className={
                        "bg-gradient-to-br from-white to-purple-600 bg-clip-text py-2 text-2xl font-bold text-transparent dark:to-slate-600"
                    }
                >
                    tigo.tech
                </h1>

                <div
                    className={
                        "flex justify-center"
                    }
                >
                    <div className={styles.categoryContainer}>
                        <div>
                            <p className={styles.categoryTitle}>Find me here</p>
                        </div>
                        <div className={styles.socialMediaCategory}>
                            <a
                                className={footerLink}
                                rel={"noreferrer noopener _blank"}
                                href={"https://github.com/tigomiddelkoop"}
                            >
                                <FontAwesomeIcon
                                    width={16}
                                    className={"mr-1"}
                                    icon={faGithub}
                                />{" "}
                                GitHub
                            </a>

                            <a
                                className={footerLink}
                                rel={"noreferrer noopener _blank"}
                                href={
                                    "https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"
                                }
                            >
                                <FontAwesomeIcon
                                    width={16}
                                    className={"mr-1"}
                                    icon={faLinkedin}
                                />{" "}
                                LinkedIn
                            </a>
                        </div>
                    </div>

                </div>
                <p className={"text-xs"}>
                    All the pictures on this site are made by Tigo and are of
                    his code and the servers it is hosted on.
                </p>
            </div>
        </footer>
    )
}
