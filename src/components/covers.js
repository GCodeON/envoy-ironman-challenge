import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { Carousel } from '@trendyol-js/react-carousel';


import * as styles from "./covers.module.css"

const Covers = ({props}) => {
    console.log('get props', props)
    return (
        <div className="covers">
            <Carousel show="3">
                {props.results.map((item, i) => (
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} key={i} />
                ))}
            </Carousel>
        </div>
        
    );
}

export default Covers