import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>MIXYZWEB</title>
        <meta property="og:title" content="MIXYZWEB" />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/ppppfffffp.svg"
        className="home-image"
      />
      <img
        alt="image"
        src="/playground_assets/still%20working%20on%20it..svg"
        className="home-image1"
      />
    </div>
  )
}

export default Home
