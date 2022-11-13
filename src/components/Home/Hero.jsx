import React from 'react'

const Hero = () => {
    const textColor={
        fontSize: "72px",
        background:" -webkit-linear-gradient(#009FFD, #2A2A72)",
        backgroundClip:" border-box",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color":" transparent",
      }
  return (
    <>
     <div className="pageheader bg_img" style={{ backgroundImage: "url('assets/images/bg-img/blogimg.jpg')" }}>
        <div className="container">
            <div className="pageheader__content text-center">
                <h2 style={textColor}>Home </h2>
                {/* <nav aria-label="breadcrumb">
                    <p className='breadcrumb-item active'>
                        Lorem ipsum dolor sit amet.
                    </p>
                </nav> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero