import React from 'react'
import Hero2 from './Hero2'
import Sections from './Sections'

import Navbar from '../Navbar'
import Footer from '../Footer'
import About2 from './About2'
import MyProjectsSection from './MyProjectsSection'

const Blog = () => {
  return (
    <div className='mt-5 pt-5 '>
    <Navbar/>
   
    <Hero2/>
    {/* <About2/> */}
    {/* <Sections/> */}
    <MyProjectsSection></MyProjectsSection>
    {/* <Details/> */}

    <Footer/>
    
    </div>
  )
}

export default Blog