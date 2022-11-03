import React from 'react'

const Work = () => {

	
  return (
    <>
    <div className="work work--style2 padding-top padding-bottom bg_img" style={ {backgroundImage: "url('assets/images/bg-img/01.jpg')"}}>
		<div className="container">
			<div className="section__wrapper">
				<div className="row g-4 justify-content-center">
					<div className="col-xl-6 col-lg-8 col-12 wow fadeInLeft" data-wow-duration="1.5s">
						<div className="work__item">
							<div className="work__inner">
								<div className="work__thumb">
									<img src="assets/images/work/09.png" alt="dating thumb"/>
								</div>
								<div className="work__content">
									<h3>Trust And Safety</h3>
									<p>Choose from one of our membership levels and unlock features you need. </p>
									<a href="policy.html" className="default-btn"><span>See More Details</span></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-8 col-12 wow fadeInRight" data-wow-duration="1.5s">
						<div className="work__item">
							<div className="work__inner">
								<div className="work__thumb">
									<img src="assets/images/work/10.png" alt="dating thumb"/>
								</div>
								<div className="work__content">
									<h3>Simple Membership</h3>
									<p>Choose from one of our membership levels and unlock features you need. </p>
									<a href="membership.html" className="default-btn reverse"><span>Membership Details</span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Work