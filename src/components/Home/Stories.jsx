import React from 'react'

const Stories = () => {
  return (
    <>
    <div className="story bg_img padding-top padding-bottom" style={{backgroundImage: "url('assets/images/bg-img/02.jpg')"}}>
		<div className="container">
			<div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
				<h2>Ollya Stories From Our Lovers</h2>
				<p>Listen and learn from our community members and find out tips and tricks to meet your love. Join us and be part of a bigger family.</p>
			</div>
			<div className="section__wrapper">
				<div className="row g-4 justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
					<div className="col wow fadeInUp" data-wow-duration="1.5s">
						<div className="story__item">
							<div className="story__inner">
								<div className="story__thumb">
									<a href="blog-single.html"><img src="assets/images/story/01.jpg" alt="dating thumb"/></a>
									<span className="member__activity member__activity--ofline">Entertainment</span>
								</div>
								<div className="story__content">
									<a href="blog-single.html"><h4>Dream places and locations to visit in 2022</h4></a>
									<div className="story__content--author">
										<div className="story__content--thumb">
											<img src="assets/images/story/author/01.jpg" alt="dating thumb"/>
										</div>
										<div className="story__content--content">
											<h6>Hester Reeves</h6>
											<p>April 16, 2022</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col wow fadeInUp" data-wow-duration="1.6s">
						<div className="story__item">
							<div className="story__inner">
								<div className="story__thumb">
									<a href="blog-single.html"><img src="assets/images/story/02.jpg" alt="dating thumb"/></a>
									<span className="member__activity member__activity--ofline">Love Stories</span>
								</div>
								<div className="story__content">
									<a href="blog-single.html"><h4>Make your dreams come true and monetise quickly</h4></a>
									<div className="story__content--author">
										<div className="story__content--thumb">
											<img src="assets/images/story/author/02.jpg" alt="dating thumb"/>
										</div>
										<div className="story__content--content">
											<h6>Arika Q Smith</h6>
											<p>March 14, 2022</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col wow fadeInUp" data-wow-duration="1.7s">
						<div className="story__item">
							<div className="story__inner">
								<div className="story__thumb">
									<a href="blog-single.html"><img src="assets/images/story/03.jpg" alt="dating thumb"/></a>
									<span className="member__activity member__activity--ofline">Attraction</span>
								</div>
								<div className="story__content">
									<a href="blog-single.html"><h4>Love looks not with the eyes, but with the mind.</h4></a>
									<div className="story__content--author">
										<div className="story__content--thumb">
											<img src="assets/images/story/author/03.jpg" alt="dating thumb"/>
										</div>
										<div className="story__content--content">
											<h6>William Show</h6>
											<p>June 18, 2022</p>
										</div>
									</div>
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

export default Stories