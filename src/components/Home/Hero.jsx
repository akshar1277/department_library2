import React from 'react'

const Hero = () => {
  return (
    <>
     <div className="pageheader bg_img" style={ {backgroundImage: "url('assets/images/bg-img/pageheader.jpg')"}}>
        <div className="container">
            <div className="pageheader__content text-center">
                <h2>Home </h2>
                <nav aria-label="breadcrumb">
                    <p className='breadcrumb-item active'>
                        Lorem ipsum dolor sit amet.
                    </p>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero