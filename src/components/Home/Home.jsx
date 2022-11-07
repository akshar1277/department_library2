import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
// import About from './About';
// import Banner from './Banner';
import Count from './Count';
import Hero from './Hero';
import Video from './Video';
import Dashboard from './Dashboard/Dashboard';
const Home = () => {
  return (
    <>
    <Navbar/> 
    <Hero/>
    <Dashboard/>
    <Count/>
    <Video/>
    <Footer/>
    
    </>
  )
}

export default Home