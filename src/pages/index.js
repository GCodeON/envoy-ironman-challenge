import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../components/layout';
import Navigation from '../components/navigation';
import Hero from '../components/hero';

const IndexPage = () => {
  const [hero, sethero] = useState(false);


  useEffect(() => {
    axios.get(`https://gateway.marvel.com/v1/public/characters?name=iron%20man&apikey=${process.env.GATSBY_MARVEL_API_KEY}`)
    .then(response => sethero(response.data.data.results[0]))
  }, [])

  return (

    <Layout>
      <Navigation />
      <Hero props={hero} />
    </Layout>
    
  )
}

export default IndexPage
