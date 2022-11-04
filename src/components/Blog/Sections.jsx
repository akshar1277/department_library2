import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";


const Sections = () => {


	const [myData, setMyData] = useState([]);
	const [myData2, setMyData2] = useState([]);
	const [isError, setIsError] = useState("");

	//Let 2 variable to store api for multiple api roting

	let first = "https://department-library.herokuapp.com/Project_2019-20/?format=json"
	let second = "https://department-library.herokuapp.com/Project_2020-21/?format=json"


	//using Async Await
	// const getMyPostData = async () => {
	// 	try {
	// 		const res = await axios.get(first);
	// 		const res2 = await axios.get(second);
	// 		setMyData(res.data);
	// 		console.log(res.data);
	// 	} catch (error) {
	// 		setIsError(error.message);
	// 	}


	// };
	const res = axios.get(first);
	const res2 = axios.get(second);




	// NOTE:  calling the function
	useEffect(() => {
		// getMyPostData();
		window.scrollTo(0, 0);

		axios.all([res, res2]).then(axios.spread((...responses) => {
			const responseOne = responses[0]
			const responseTwo = responses[1]

			setMyData(responseOne.data)
			setMyData2(responseTwo.data)


		})).catch((error) => setIsError(error.message));
	},[]);

	return (
		<>
			{isError !== "" && <h2>{isError}</h2>}
			<div className="blog padding-top padding-bottom">
				<div className="container">
					<div className="section-wrapper">
						<div className="row g-4 justify-content-center">

							{myData.map((post) => {
								const { Batch, id, Project_id, Project_name, Abstract, Leader_enroll, Leader_name, Leader_email, Internal_guide } = post;
								return (
									<div className="col-12" key={id}>
										<div className="blog__item">
											<div className="blog__inner d-flex flex-wrap align-items-center" style={{backgroundColor : '#161436'}}>
												<div className="blog__thumb w-xl-50 w-100">
													<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwClaAAG5jzNEsPjci481kKWj-Rch5qeQyei7GEOQk20zGTc-yiF0lT-MugCOcUZJtcPg&usqp=CAU" alt="blog-thumb" className="w-100" />
												</div>
												<div className="blog__content p-4 ps-xl-5 w-xl-50 w-100">
													<Link to='/blogdetails'><h3 style={{color : 'white'}} >{Project_name}</h3></Link>
													<div className="blog__metapost">
														<a href="/#" style = {{color:'#42a69c'}}>Batch : {Batch}</a>
														<a href="/#" style = {{color:'#42a69c'}}>LeaderName : {Leader_name}</a>


													</div>

													<p style={{color : 'white'}}>{Abstract.slice(0, 200)}...</p>
													<Link style={{backgroundColor : '#2c3378'}} to='/blogdetails' className="default-btn"><span>read more</span></Link>
												</div>
											</div>
										</div>
									</div>
								);
							})}
							{myData2.map((post) => {
								const { Batch, id, Project_id, Project_name, Abstract, Leader_enroll, Leader_name, Leader_email, Internal_guide } = post;
								return (
									<div className="col-12" key={id}>
										<div className="blog__item">
											<div className="blog__inner d-flex flex-wrap align-items-center" style={{backgroundColor : '#161436'}}>
												<div className="blog__thumb w-xl-50 w-100">
												<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwClaAAG5jzNEsPjci481kKWj-Rch5qeQyei7GEOQk20zGTc-yiF0lT-MugCOcUZJtcPg&usqp=CAU" alt="blog-thumb" className="w-100" />
												</div>
												<div className="blog__content p-4 ps-xl-5 w-xl-50 w-100">
													<Link to='/blogdetails'><h3>{Project_name}</h3></Link>
													<div className="blog__metapost">
														<a href="/#" style = {{color:'#42a69c'}}>Batch : {Batch}</a>
														<a href="/#" style = {{color:'#42a69c'}}>LeaderName : {Leader_name}</a>

													</div>

													<p style = {{color : 'white'}}>{Abstract.slice(0, 200)}</p>
													<Link style={{backgroundColor : '#2c3378'}} to='/blogdetails' className="default-btn"><span>read more</span></Link>
												</div>
											</div>
										</div>
									</div>
								);
							})}

	
							<div className="member__pagination mt-4">

								<div className="member__pagination--right">
									<ul className="default-pagination">
										<li>
											<a href="#"><i className="fas fa-chevron-left"></i></a>
										</li>
										<li>
											<a href="#">01</a>
										</li>
										<li>
											<a href="#" className="active">02</a>
										</li>
										<li>
											<a href="#">03</a>
										</li>
										<li>
											<a href="#"><i className="fas fa-chevron-right"></i></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Sections