import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Details = () => {
	// { Batch, id, Project_id, Project_name, Abstract, Leader_enroll, Leader_name, Leader_email, Internal_guide }
	return (
		<>
			<Navbar />
			<div class="blog blog--style2  aside-bg mt-5">
				<div class="container mt-5">
					<div class="section-wrapper">
						<div class="row justify-content-center pb-15">
							<div class="col-lg-9 col-12">
								<article>
									<div class="blog__item">
										<div class="blog__inner">
											<div class="blog__thumb mt-5">
												<img src="assets/images/blog/single/01.jpg" alt="blog" />
											</div>
											<div class="blog__content">
												<h2>title : Project_name</h2>
												<ul class="blog__date">
													<li><span><i class="fa-solid fa-calendar-days"></i>Batch :</span></li>
													<li><span><i class="fa-solid fa-calendar-days"></i>Project ID : </span></li>
													<li><span><i class="fa-solid fa-calendar-days"></i>Internal Guide : </span></li>

												</ul>
												<ul class="blog__date">
													<li><span><i class="fa-solid fa-calendar-days"></i>Leader Name : </span></li>
													<li><span><i class="fa-solid fa-calendar-days"></i>Leader Enrollment :</span></li>
													<li><span><i class="fa-solid fa-calendar-days"></i>Leader Email : </span></li>

												</ul>
												<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quam ipsum error voluptas dolor commodi. Sit, libero aliquam enim maxime, laboriosam animi quas ex, modi veritatis officiis voluptas labore quia a est aut natus repellat molestiae porro qui. At aut nemo quibusdam facilis totam provident veniam earum tempore esse error.</p>
												{/* <blockquote class="single-quote mb-4">
													<div class="quotes">
														Dynamicaly recaptiuaze distribute technologies wherease
														turnkey channels and onotonec provide aces to resource
														levelng expert vias worldwide deve in rabes uoliticly extend
														aserser are diverse vortals.
														<span>...Melissa Hunter</span>
													</div>
												</blockquote> */}


												<div class="blog__thumb mb-4"><img src="assets/images/blog/single/02.jpg" alt="blog-img" />
												</div>
												<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quam ipsum error voluptas dolor commodi. Sit, libero aliquam enim maxime, laboriosam animi quas ex, modi veritatis officiis voluptas labore quia a est aut natus repellat molestiae porro qui. At aut nemo quibusdam facilis totam provident veniam earum tempore esse error.</p>

												

												<div class="blog__thumb mb-4">
													<img src="assets/images/blog/single/03.jpg" alt="blog" />
													<a href="https://www.youtube.com/embed/U9O8G5AreXE" class="play-btn"
														data-rel="lightcase">
														<i class="fa-solid fa-play"></i>
														<span class="pluse_2"></span>
													</a>
												</div>
												<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quam ipsum error voluptas dolor commodi. Sit, libero aliquam enim maxime, laboriosam animi quas ex, modi veritatis officiis voluptas labore quia a est aut natus repellat molestiae porro qui. At aut nemo quibusdam facilis totam provident veniam earum tempore esse error.</p>

											</div>
										</div>
									</div>

									{/* <div class="author">
										<div class="author__thumb">
											<img src="assets/images/blog/author/01.jpg" alt="author" />
										</div>
										<div class="author__content">
											<h6 class="mb-2">Rajib Ahmed</h6>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsa autem reprehenderit dolorem necessitatibus numquam illo in commodi cum. Quidem odit neque laudantium sequi exercitationem quas aspernatur, dolores vero earum.</p>
											<div class="social-media">
												<a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
												<a href="#" class="behance"><i class="fa-brands fa-behance"></i></a>
												<a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a>
												<a href="#" class="vimeo"><i class="fa-brands fa-vimeo-v"></i></a>
												<a href="#" class="linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
											</div>
										</div>
									</div> */}




								</article>
							</div>

						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Details