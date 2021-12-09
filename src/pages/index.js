import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navigation from '../components/navigation';
import Hero from '../components/hero';

const IndexPage = () => {
  const [hero, sethero] = useState(false);


  useEffect(() => {
    axios.get(`https://gateway.marvel.com/v1/public/characters?name=iron%20man&apikey=${process.env.GATSBY_MARVEL_API_KEY}`)
    .then(response => sethero(response.data.data.results[0]))
  }, [])

  return (

    <div className="page">
      <Navigation />
      <Hero props={hero} />
    </div>
    
  )
}

export default IndexPage
