import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import About from './About';
import Banner from './Banner';
import Count from './Count';


import Hero from './Hero';
import Stories from './Stories';
import Video from './Video';
import Work from './Work';
import Dashboard2 from './Dashboard2';


const Home = () => {
  return (
    <>
      <Navbar />
     
      <Dashboard2></Dashboard2>
      
   

      {/* <Count />

      <Video /> */}

      <Footer />


    </>
  )
}

export default Home