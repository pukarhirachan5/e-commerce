import React from 'react'
import Hero from '../components/home/Hero'
import LatestCollection from '../components/product/LatestCollection'
import BestSeller from '../components/home/BestSeller'
import OurPolicy from '../components/home/OurPolicy'
import NewsLetter from '../components/home/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  )
}

export default Home