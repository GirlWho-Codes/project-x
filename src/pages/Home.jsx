import React from 'react'
import NavPage from '../components/NavPage';
import Hero from '../components/Hero'
import Features from '../components/Features'
import Frame from '../components/Frame';
import Card from '../components/Card';
import TalentBanner from '../components/TalentBanner'
import FAQ from '../components/FAQ'
import FooterBanner from '../components/FooterBanner';
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <NavPage/>
      <Hero/>
      <Features />
      <Frame/>
      <Card/>
      <TalentBanner/>
      <FAQ/>
      <FooterBanner/>
      <Footer/>
    </div>
  )
}

export default Home
