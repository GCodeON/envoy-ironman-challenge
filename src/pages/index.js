import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../components/layout';
import Navigation from '../components/navigation';
import Hero from '../components/hero';
import Info from '../components/info';

import geniusIcon from '../images/genius-icon.png';
import engineerIcon from '../images/engineer-icon.png';
import businessmanIcon from '../images/businessman-icon.png';
import tacticianIcon from '../images/tactician-icon.png';

const IndexPage = () => {
  const [hero, sethero] = useState(false);

  useEffect(() => {
    axios.get(`https://gateway.marvel.com/v1/public/characters?name=iron%20man&apikey=${process.env.GATSBY_MARVEL_API_KEY}`)
    .then(response => sethero(response.data.data.results[0]))
  }, [])

  console.log('hero', hero)
  const info = {
    headline: 'Contrary to popular belief, he knows exactly what he’s doing.',
    facts: [
      {
        icon : geniusIcon,
        sub  : "Super-Genius Intelligence",
        copy : "Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17."
      },
      {
        icon : engineerIcon,
        sub  : "Master Engineer",
        copy : "He is an excellent engineer and mechanic capable of fixing almost any, if not all machinery."
      },
      {
        icon : businessmanIcon,
        sub  : "Master Businessman",
        copy : "Stark is extremely well-respected in the business world, able to command people's attentions when he speaks on economic matters.  He has built up several multi-million dollar companies from virtually nothing."
      },
      {
        icon : tacticianIcon,
        sub  : "Expert Tactician",
        copy : "He is a brilliant tactician capable of quickly formulating battle strategies and new plans if the situation changes, like being able to elaborate complex plans in order to defeat different enemies."
      }
    ]
  }

  const apiImage = hero ? `${hero.thumbnail.path}.${hero.thumbnail.extension}` : '';

  return (

    <Layout>
      <Navigation />
      <Hero props={hero} />
      <Info props={info}>
        {/* Workaround to be able to display api image due to loading data from the client side */}
        <img className="apiImage" src={apiImage} alt="iron man"></img>
      </Info>
    </Layout>
    
  )
}

export default IndexPage
