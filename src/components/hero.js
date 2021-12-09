import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./hero.module.css"

const Hero = ({props}) => {
    console.log(props);
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
                    <button className={`gold ${styles.button}`}>
                        <p>Get Started</p>
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default Hero