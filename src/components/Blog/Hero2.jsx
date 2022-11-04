import React from 'react'


const Hero2 = () => {
  return (
   <>
    <div style={{backgroundColor : 'black', overflow : 'hidden', position : 'relative', height : '600px' }}>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMHByb2plY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="not found" srcset="" style={{opacity : '0.27', height : 'auto', width : '100%', position : 'absolute', top : '0', left : '0'}}/>
        <div className="container" >
            <div className="pageheader__content text-center ">
                <h2 style = {{color : 'white'}}>Our Blog Post</h2>
                {/* <nav aria-label="breadcrumb ">
                    <ol className="breadcrumb justify-content-center mb-0">
                      <li className="breadcrumb-item" style = {{color : 'white'}}><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page" style = {{color : 'white'}}>Blog</li>
                    </ol>
                </nav> */}
            </div>
        </div>
    </div>
   </>
  )
}

export default Hero2