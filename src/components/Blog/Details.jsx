/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom';

const Details = () => {
	// { Batch, id, Project_id, Project_name, Abstract, Leader_enroll, Leader_name, Leader_email, Internal_guide }
	const buttonStyle = {
		background: "linear-gradient(#009FFD, #2A2A72)",
		color: "#fff"
	}
	const spanStyle = {
		color: '#fff'
	}

	const { betch, id } = useParams();

	const [data, setdata] = useState({})

	useEffect(() => {
		window.scrollTo(0, 0)
		let projectdata = async () => {
			await fetch(`https://department-website.onrender.com/Project_${betch}/${id}`)
				.then((res) => {
					if (res.ok) {
						return res.json()
					}
				})
				.then((jsonres) => {
					setdata(jsonres)




				})
		}
		projectdata()
	}, [betch, id])
	const ur = "https://drive.google.com/file/d/1qAsQuFv2maBVp_-FQm6iBwZrPJnSegs0/view"

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
												<img src={data.Preview_URL}
													width="800"
													height="500" alt={data.Project_name} />

											</div>
											<div class="blog__content">
												<h2>title : {data.Project_name}</h2>
												<ul class="blog__date">
													<li><span><i class="fa-solid fa-calendar-days"></i>Batch :{data.Batch}</span></li>
													<li><span><i class="fa-solid fa-calendar-days"></i>Project ID : {data.Project_id}</span></li>
													<li><span><i class="fa-solid fa-calendar-days"></i>Internal Guide : {data.Internal_guide}</span></li>

												</ul>

												<ul class="blog__date">
													<li><span><i class="fa-solid fa-calendar-days"></i>Leader Name : {data.Leader_name}</span></li>
													<li><span><i class="fa-solid fa-calendar-days"></i>Leader Enrollment : {data.Leader_enroll}</span></li>
													<li><span><i class="fa-solid fa-calendar-days"></i>Leader Email :{data.Leader_email} </span></li>

												</ul>
												<div className='row align-items-center justify-content-center'>
													<div className='col'>
														<a href={data.Poster_URL} target="_blank">
															<button style={buttonStyle} className="default-btn reverse d-block"><span style={spanStyle} >Download Poster</span></button>
														</a>
													</div>

													<div className='col'>
														<a href={data.Document_URL} target="_blank">
															<button style={buttonStyle} className="default-btn reverse d-block"><span style={spanStyle} >Download Report</span></button>
														</a>

													</div>
													<div className='col'>
														<a href={data.Video_URL} target="_blank">
															<button style={buttonStyle} className="default-btn reverse d-block"><span style={spanStyle} >Watch Video</span></button>
														</a>
													</div>
												</div>
												<p style={{ "marginTop": '2rem' }}>{data.Abstract}</p>







												{/* <div class="blog__thumb mb-4">
													<img src="assets/images/blog/single/03.jpg" alt="blog" />
													<a href="https://www.youtube.com/embed/U9O8G5AreXE" class="play-btn"
														data-rel="lightcase">
														<i class="fa-solid fa-play"></i>
														<span class="pluse_2"></span>
													</a>
												</div> */}

											</div>
										</div>
									</div>






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