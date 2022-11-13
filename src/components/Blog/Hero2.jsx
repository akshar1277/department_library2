import React from 'react'


const Hero2 = () => {
  const textColor={
    fontSize: "72px",
    background:" -webkit-linear-gradient(#009FFD, #2A2A72)",
    backgroundClip:" border-box",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color":" transparent",
  }
  return (
    <>

      <div className="pageheader bg_img " style={{ backgroundImage: "url('assets/images/bg-img/blogimg.jpg')" }} >
        <div className="container" >
          <div className="pageheader__content text-center " >
            <h2 style={textColor} >Our Projects</h2>
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">project</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero2