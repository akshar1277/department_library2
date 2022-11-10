import React from 'react'
import Hero2 from './Hero2'
import Sections from './Sections'

import Navbar from '../Navbar'
import Footer from '../Footer'
import About2 from './About2'

import AllProjectsmap from './AllProjectsmap';


const Blog = () => {
  return (
    <div className=''>
    <Navbar/>
   
    <Hero2/>
    <About2/>
    {/* <Sections/> */}
    
    {/* <Details/> */}
    <AllProjectsmap></AllProjectsmap>

    <Footer/>
    
    </div>
  )
}

export default Blog