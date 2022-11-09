import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import ReactPaginate from 'react-paginate';


const AllProjectsmap = () => {


	const [myData, setMyData] = useState([]);
	const [myData2, setMyData2] = useState([]);
	const [isError, setIsError] = useState("");
	const[data,setData]=useState([]);
	const [currentPage, setcurrentPage] = useState(1)
	const [itemsPerPage, setitemsPerPage] = useState(10)

  //this is for react paginate
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

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
			console.log(responses)
			const responseOne = responses[0]
			const responseTwo = responses[1]
			const responseData=[...responseOne.data,...responseTwo.data]
			
			setMyData(responseOne.data)
			setMyData2(responseTwo.data)
			setData(responseData)

		})).catch((error) => setIsError(error.message));
	}, []);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
	  
	   setCurrentItems(data.slice(itemOffset, endOffset));
	   setPageCount(Math.ceil(data.length / itemsPerPage));
	  },[itemOffset, itemsPerPage,data])
	  
  
	  const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data.length;
		setItemOffset(newOffset);
	  };

	return (
		<>
		<div class="member member--style2 " style={{"padding-top": "28px"}}>
		<div class="container">
			<div class="section__wrapper">
				<div class="member__info mb-4">
					<div class="member__info--left">
						<div class="member__info--filter">
							<div class="default-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Filter Your Search <i class="fa-solid fa-sliders"></i></span></div>
						</div>
						
					</div>
					
                </div>
				
				
			</div>
		</div>
	</div>
			{isError !== "" && <h2>{isError}</h2>}
			<div className="blog  padding-bottom">
				<div className="container">
					<div className="section-wrapper">
						<div className="row g-4 justify-content-center">

							{currentItems && currentItems.map((post) => {
								const { Batch, id, Project_id, Project_name, Abstract, Leader_enroll, Leader_name, Leader_email, Internal_guide } = post;
								return (
									<div className="col-12" key={id}>
										<div className="blog__item">
											<div className="blog__inner d-flex flex-wrap align-items-center">
												<div className="blog__thumb w-xl-50 w-100">
													<img src="assets/images/blog/03.jpg" alt="blog-thumb" className="w-100" />
												</div>
												<div className="blog__content p-4 ps-xl-5 w-xl-50 w-100">
													<Link to='/details'><h3>{Project_name}</h3></Link>
													<div className="blog__metapost">
														<a href="/#">Batch : {Batch}</a>
														<a href="/#">LeaderName : {Leader_name}</a>


													</div>

													<p>{Abstract.slice(0, 200)}</p>
													<Link to='/details' className="default-btn"><span>read more</span></Link>
												</div>
											</div>
										</div>
									</div>
								);
							})}
							{/* {myData2.map((post) => {
								const { Batch, id, Project_id, Project_name, Abstract, Leader_enroll, Leader_name, Leader_email, Internal_guide } = post;
								return (
									<div className="col-12" key={id}>
										<div className="blog__item">
											<div className="blog__inner d-flex flex-wrap align-items-center">
												<div className="blog__thumb w-xl-50 w-100">
													<img src="assets/images/blog/03.jpg" alt="blog-thumb" className="w-100" />
												</div>
												<div className="blog__content p-4 ps-xl-5 w-xl-50 w-100">
													<Link to='/details'><h3>{Project_name}</h3></Link>
													<div className="blog__metapost">
														<a href="/#">Batch : {Batch}</a>
														<a href="/#">LeaderName : {Leader_name}</a>


													</div>

													<p>{Abstract.slice(0, 200)}</p>
													<Link to='/details' className="default-btn"><span>read more</span></Link>
												</div>
											</div>
										</div>
									</div>
								);
							})} */}


<ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"member__pagination mt-4 member__pagination--right        default-pagination"}
        nextLinkClassName={"pagination__link"}
        activeClassName={"pagination__link--active"}
        
             
      />
						</div>
					</div>
				</div>
			</div>



			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
			<h5 class="modal-title" id="exampleModalLabel">Filter your search</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<form action="#">
					<div class="banner__list">
						<div class="row align-items-center row-cols-1">
							<div class="col">
								<label>I am a</label>
								<div class="banner__inputlist">
									<select>
										<option>Select Gender</option>
										<option value="male" selected>Male</option>
										<option value="female">Female</option>
										<option value="others">Others</option>
									</select>
								</div>
							</div>
							<div class="col">
								<label>Looking for</label>
								<div class="banner__inputlist">
									<select>
										<option>Select Gender</option>
										<option value="male">Male</option>
										<option value="female" selected>Female</option>
										<option value="others">Others</option>
									</select>
								</div>
							</div>
							<div class="col">
								<label>Age</label>
								<div class="row g-3">
									<div class="col-6">
										<div class="banner__inputlist">
											<select>
												<option value="18" selected>18</option>
												<option value="19">19</option>
												<option value="20">20</option>
												<option value="21">21</option>
												<option value="22">22</option>
												<option value="23">23</option>
												<option value="24">24</option>
												<option value="25">25</option>
												<option value="26">26</option>
												<option value="27">27</option>
												<option value="28">28</option>
												<option value="29">29</option>
												<option value="30">30</option>
												<option value="31">31</option>
												<option value="32">32</option>
												<option value="33">33</option>
												<option value="34">34</option>
												<option value="35">35</option>
												<option value="36">36</option>
												<option value="37">37</option>
												<option value="38">38</option>
												<option value="39">39</option>
												<option value="40">40</option>
											</select>
										</div>
									</div>
									<div class="col-6">
										<div class="banner__inputlist">
											<select>
												<option value="18">18</option>
												<option value="19">19</option>
												<option value="20">20</option>
												<option value="21">21</option>
												<option value="22">22</option>
												<option value="23">23</option>
												<option value="24">24</option>
												<option value="25" selected>25</option>
												<option value="26">26</option>
												<option value="27">27</option>
												<option value="28">28</option>
												<option value="29">29</option>
												<option value="30">30</option>
												<option value="31">31</option>
												<option value="32">32</option>
												<option value="33">33</option>
												<option value="34">34</option>
												<option value="35">35</option>
												<option value="36">36</option>
												<option value="37">37</option>
												<option value="38">38</option>
												<option value="39">39</option>
												<option value="40">40</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							
							<div class="col">
								<button type="submit" class="default-btn reverse d-block"><span>Find Your Partner</span></button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		</div>
	</div>
		</>
	)
}

export default AllProjectsmap