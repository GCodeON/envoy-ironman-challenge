import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./navigation.module.css"
// import logo from '../images/Logo.svg'


const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    {/* <img src={logo} alt="iron man logo" /> */}
                    <StaticImage 
                        src="../images/Logo.png" 
                        alt="iron man" 
                        layout="constrained"
                    />
                </div>
                <div className={styles.buttons}>
                    <div className={styles.button}>Sign In</div>
                    <div className={`gold ${styles.button}`}>Sign Up</div>
                </div>
            </div>
        </div>
    );
}

export default Navigation