import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="logo">
                <StaticImage src="../images/logo.svg" alt="iron man logo" />
            </div>

        </div>
    );
}

export default Navigation