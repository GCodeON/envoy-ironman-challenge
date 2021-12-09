import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = ({props}) => {
    console.log(props);
    return (
        <div className="hero">
            <div className="media">
                <StaticImage src="../images/chibi.png" alt="iron man" />
            </div>
            <div class="content">
                {props.description}
            </div>
        </div>
    );
}

export default Hero