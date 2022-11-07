import React from 'react'

const Count = () => {
  return (
   <>
   <div className="about padding-top padding-bottom">
		<div className="container">
			<div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
				<h2>It All Starts With A Date</h2>
				<p className='para'>Learn from them and try to make it to this board. This will for sure boost you visibility and increase your chances to find you loved one.</p>
			</div>
			<div className="section__wrapper">
				<div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
					<div className="col wow fadeInUp" data-wow-duration="1.5s">
						<div className="about__item text-center">
							<div className="about__inner">
								<div className="about__thumb">
									<img src="assets/images/about/icon/01.png" alt="dating thumb"/>
								</div>
								<div className="about__content">
									<h3><span className="counter" data-to="990960" data-speed="1500"></span></h3>
									<p>Members in Total</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col wow fadeInUp" data-wow-duration="1.6s">
						<div className="about__item text-center">
							<div className="about__inner">
								<div className="about__thumb">
									<img src="assets/images/about/icon/02.png" alt="dating thumb"/>
								</div>
								<div className="about__content">
									<h3><span className="counter" data-to="628590" data-speed="1500"></span></h3>
									<p>Members Online</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col wow fadeInUp" data-wow-duration="1.7s">
						<div className="about__item text-center">
							<div className="about__inner">
								<div className="about__thumb">
									<img src="assets/images/about/icon/03.png" alt="dating thumb"/>
								</div>
								<div className="about__content">
									<h3><span className="counter" data-to="314587" data-speed="1500"></span></h3>
									<p>Women Online</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col wow fadeInUp" data-wow-duration="1.8s">
						<div className="about__item text-center">
							<div className="about__inner">
								<div className="about__thumb">
									<img src="assets/images/about/icon/04.png" alt="dating thumb"/>
								</div>
								<div className="about__content">
									<h3><span className="counter" data-to="102369" data-speed="1500"></span></h3>
									<p>Men Online</p>
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

export default Count