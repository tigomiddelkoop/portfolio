import Pill from "./Pill";
import styles from "./footer.module.scss"

export default function Footer() {

    return <div
        className={"p-4 border-t border-b border-gray-100 items-center justify-center text-center"}>
        <h1 className={"text-2xl"}>tigo.tech</h1>
        <div className={"flex flex-col lg:flex-row items-center justify-center text-center"}>
            <div className={styles.footerCategoryContainer}>
                <p className={styles.footerCategoryTitle}>Sites</p>
                <div className={"flex items-center"}><a href={"https://tigo.tech"}
                                                        className={"mr-1"}>tigo.tech</a><Pill>You're
                    here</Pill></div>
                <div className={"flex items-center"}><a href={"https://genericdevelopment.nl"}>GenericDevelopment</a>
                </div>
                <div className={"flex items-center"}><a href={"https://systemmanager.io"}>SystemManager Core</a></div>
            </div>

            <div className={styles.footerCategoryContainer}>
                <p className={styles.footerCategoryTitle}>Socials</p>
                <p className={styles.footerCategorySubTitle}>These socials I am willing to give</p>
                <div><a rel={"noreferrer noopener _blank"} href={"https://github.com/tigomiddelkoop"}>GitHub</a></div>
                <div><a rel={"noreferrer noopener _blank"} href={"https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"}>LinkedIn</a></div>
                {/*<div><a>Twitter</a></div>*/}
            </div>

            <div className={styles.footerCategoryContainer}>
                <p className={styles.footerCategoryTitle}>Kubernetes info</p>
                <div className={styles.footerCategorySubTitle}>
                    <p>That's right! It's deployed in kubernetes!</p>
                    <p>I'm even learning kubernetes</p>
                </div>
                <p>Served from node: </p>
                <p>Build id:</p>
            </div>
        </div>
    </div>

}