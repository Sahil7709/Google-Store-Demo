import React from 'react'
import Hero from '../../components/home/hero/Hero'
import Recommendations from '../../components/home/cards/recommendations/Recomendations'
import Wow from '../../components/home/cards/wow/Wow'
import Discover from '../../components/home/cards/discover/Discover'

function HomePages() {
  return (
    <>

      <Hero />
      <Recommendations />
      <Wow />
      <Discover />

    </>
  )
}

export default HomePages