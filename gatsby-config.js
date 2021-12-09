require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "envoy-ironman-challenge",
  },
  
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
};
