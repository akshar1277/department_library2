import React from 'react'
const Hero = () => {
  return (
    <>
    <div style={{backgroundColor : 'black', overflow : 'hidden', position : 'relative', height : '600px' }}>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMHByb2plY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="not found" srcset="" style={{opacity : '0.3', height : 'auto', width : '100%', position : 'absolute', top : '0', left : '0'}}/>
        <div className="container" style={{marginTop : '13%'}}>
            <div className="pageheader__content text-center" style={{display : 'block'}}>
                <h2 style={{color : 'white'}}>Home </h2>
                <nav aria-label="breadcrumb">
                    <p className='breadcrumb-item active' style={{color : "black"}}>
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