import React from 'react'

const Hero2 = () => {
  return (
   <>
    <div className="pageheader bg_img" style={ {backgroundImage: "url('assets/images/bg-img/pageheader.jpg')"}} >
        <div className="container">
            <div className="pageheader__content text-center">
                <h2>Our Blog Post</h2>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
   </>
  )
}

export default Hero2