import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as styles from "./covers.module.css";

const settings = {
    autoPlay       : true,
    arrows         : false,
    dots           : false,
    infinite       : false,
    speed          : 100,
    slidesToShow   : 6,
    slidesToScroll : 6,
    initialSlide   : 1,
    responsive: [
        {
          breakpoint : 767,
          settings   : {
            slidesToShow   : 2.75,
            slidesToScroll : 2.75
          }
        }
      ]
};

const Covers = ({props}) => {
    return (
        <div className={styles.covers}>
            <Slider {...settings}>
                {props.results.map((item, i) => (
                    <img className={styles.cover} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} key={i} />
                ))}
            </Slider>
        </div>
        
    );
}

export default Covers