import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


import * as styles from "./hero.module.css"

const Hero = ({props}) => {
    return (
        <div className={`hero ${styles.bg}`}>
            <div className={styles.heroContainer}>
                <div className={styles.media}>
                    <StaticImage 
                        src="../images/chibi.png" 
                        alt="iron man" 
                    />
                </div>
                <div className={styles.content}>
                    <p className={styles.desc}>
                        {props.description}
                    </p>
                    <Link to="/">
                        <button className={`gold ${styles.button}`}>
                            <p>Get Started</p>
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default Hero