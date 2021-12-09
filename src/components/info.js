import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"


import * as styles from "./info.module.css"

const Info = ({props, children}) => {
    return (
        <div className={`info-section ${styles.container}`}>
            <h2 className={styles.headline}>
                {props.headline}
            </h2>
            <div className={styles.content}>
                <div className={styles.media}>
                    {children}
                </div>
                <div class={styles.info}>
                    {props.facts.map(fact => (
                        <div className={styles.fact}>
                            {/* Learned that the static image component doesn't work by passing froms from parent to child, need to query image paths directly */}
                            <img
                                src={fact.icon} 
                                alt={fact.sub} 
                            />
                            <h3 className={styles.sub}>
                                {fact.sub}
                            </h3>
                            <p className={styles.copy}>
                                {fact.copy}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Info