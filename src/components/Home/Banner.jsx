import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="banner banner--style2 bg_img" style={ {backgroundImage: "url('assets/images/banner/bg-2.jpg')"}}>
		<div className="container" >
			<div className="banner__wrapper">
				<div className="row g-0 justify-content-center">
					<div className="col-lg-6 col-12" style={ {
						display: 'flex',
						alignItems: 'end',
						justifyContent: 'center',height:'595px',backgroundSize:'cover',backgroundImage: "url('assets/images/banner/girl.png')"}} >
					<a class="default-btn style-2" style={{width:'217px',marginBottom: '81px',cursor:'pointer'}}><span>Get A Membership</span></a>
						
					</div>
					<div className="col-lg-6 col-12" style={ {
						display: 'flex',
						alignItems: 'end',
						justifyContent: 'center',height:'595px',backgroundSize:'cover',backgroundImage: "url('assets/images/banner/boy.png')"}}>
						<a class="default-btn style-2" style={{width:'217px',marginBottom: '81px',cursor:'pointer'}}><span>Get A Membership</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
   
    </>
  )
}

export default Banner