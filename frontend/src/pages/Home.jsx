import React from 'react'
import NavBar from '../components/layout/Navbar'
import HeroSection from '../components/home/HeroSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import HowItWorks from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'
import FinalCTA from '../components/home/FinalCTA'
import Footer from '../components/layout/Footer'


const Home = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Testimonials/>
      <FinalCTA/>
      <Footer/>
    </>
  )
}

export default Home
