import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import About from './About';
import Banner from './Banner';
import Count from './Count';
import Dashboard from './Dashboard';
import Hero from './Hero';
import Stories from './Stories';
import Video from './Video';
import Work from './Work';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Dashboard></Dashboard>

      <Count />

      <Video />

      <Footer />


    </>
  )
}

export default Home