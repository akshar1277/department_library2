
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import ReactPaginate from 'react-paginate';

const Sections = () => {

    const buttonStyle={
		background: "linear-gradient(#009FFD, #2A2A72)",
		color:"#fff"
	}
	const spanStyle={
		color:'#fff'
	}

    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [isError, setIsError] = useState("");
    const [data, setData] = useState([]);
    const [currentPage, setcurrentPage] = useState(1)
    const [itemsPerPage, setitemsPerPage] = useState(10)

    //this is for react paginate
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);



    //Let one usestate for filterdata

    const [filterData, setFilterData] = useState([]);
    const [query, setQuery] = useState("");



    //Let 2 variable to store api for multiple api roting

    let first = "https://department-library.herokuapp.com/Project_2019-2020/?format=json"
    let second = "https://department-library.herokuapp.com/Project_2020-2021/?format=json"


   
    const res = axios.get(first);
    const res2 = axios.get(second);







    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };


    //for filter 
    const handlesearch = (event) => {
        // event.preventDefault();
        const getSearch = event.target.value.toLowerCase();

        // console.log(getSearch);

        if (getSearch.length > 0) {
            const searchdata = data.filter((item) =>
                item.Project_name.toLowerCase().includes(getSearch) ||
                item.Batch.includes(getSearch) ||
                item.Abstract.toLowerCase().includes(getSearch) ||
                item.Internal_guide.toLowerCase().includes(getSearch) ||
                item.Leader_name.toLowerCase().includes(getSearch) ||
                item.Project_type.toLowerCase().includes(getSearch) ||
                item.Langauge.toLowerCase().includes(getSearch) ||
                item.Project_area.toLowerCase().includes(getSearch)

            );
            setData(searchdata);
        } else {
            setData(filterData);
        }
        setQuery(getSearch);
    }


    const fiterProject = (event) => {
        event.preventDefault();

        const getSearch = event.target.value.toLowerCase();
        console.log(getSearch);
        // const searchdata = data.filter((item) =>
        //     item.Project_name.toLowerCase().includes(getSearch)
        // )
        // setData(searchdata)
    }





    // NOTE:  calling the function
    useEffect(() => {
        // getMyPostData();
        window.scrollTo(0, 0);

        axios.all([res, res2]).then(axios.spread((...responses) => {
            console.log(responses)
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseData = [...responseOne.data, ...responseTwo.data]

            setMyData(responseOne.data)
            setMyData2(responseTwo.data)
            setData(responseData)
            setFilterData(responseData)

        })).catch((error) => setIsError(error.message));
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data])







    return (
        <div>

            <div className="about about--style3 padding-top pt-xl-0">
                <div className="container">
                    <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                        <form>
                            <div className="banner__list">
                                <form className="row align-items-center justify-content-center" >

                                    <div className="col-9">
                                        <div className="banner__list">

                                            <input style={{ height: "52px" }} type="name" class="form-control" placeholder='Search Anything Related to Projects' value={query} onChange={(e) => handlesearch(e)} />
                                        </div>
                                    </div>




                                    <div className="col-3">
                                        <button style={buttonStyle} type="submit" className="default-btn reverse d-block"><span style={spanStyle}>Find Your project</span></button>
                                    </div>
                                </form>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="member member--style2 " style={{ "padding-top": "28px" }}>
                <div class="container">
                    <div class="section__wrapper">
                        <div class="member__info mb-4">
                            <div class="member__info--left">
                                <div class="member__info--filter">
                                    <div class="default-btn" style={buttonStyle} data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Filter Your Search <i class="fa-solid fa-sliders"></i></span></div>
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
                                                <div className="blog__content p-4 ps-xl-5 w-xl-50 w-100" style={{textAlign:"left"}}>
                                                    <Link to={`/details/${Batch}/${id}`}><h3>{Project_name}</h3></Link>
                                                    <div className="blog__metapost">
                                                        <a href="/#">Batch : {Batch}</a>
                                                        <a href="/#">LeaderName : {Leader_name}</a>


                                                    </div>

                                                    <p>{Abstract.slice(0, 200)}</p>
                                                    <Link to={`/details/${Batch }/${id}`} className="default-btn" style={buttonStyle}><span style={spanStyle}>read more</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                           

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
                            <h5 class="modal-title" id="exampleModalLabel">Filter your Projects</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="#" onSubmit={fiterProject}>
                                <div class="banner__list">
                                    <div class="row align-items-center row-cols-2">
                                        <div class="col">
                                            <label>Batch</label>
                                            <div class="banner__inputlist">
                                                <select onChange={fiterProject}>
                                                    <option>Select Batch</option>
                                                    <option value="2020-21" selected>2020-21</option>
                                                    <option value="2019-20">2019-20</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label>Project Type</label>
                                            <div class="banner__inputlist">
                                                <select onChange={fiterProject}>
                                                    <option>Select Project Type</option>
                                                    <option value="UDP">IDP</option>
                                                    <option value="IDP" selected>UDP</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label>Project Area</label>
                                            <div class="banner__inputlist">
                                                <select onChange={fiterProject}>

                                                    <option>Select Project Area</option>
                                                    <option value="Application">Application</option>
                                                    <option value="Application Software">Application Software
                                                    </option>
                                                    <option value="Computer Vision">Computer Vision</option>
                                                    <option value="Data Science/ Data Mining">Data Science/ Data Mining
                                                    </option>
                                                    <option value="Desktop Application">Desktop Application
                                                    </option>
                                                    <option value="Holographic Technology">Holographic Technology
                                                    </option>
                                                    <option value="Image Processing using AI">Image Processing using AI
                                                    </option>
                                                    <option value="IOT">IOT</option>
                                                    <option value="Mobile App">Mobile App
                                                    </option>
                                                    <option value="Natural Language Processing">Natural Language Processing
                                                    </option>

                                                    <option value="Network Security">Network Security
                                                    </option>
                                                    <option value="Portal">Portal
                                                    </option>
                                                    <option value="Software">Software</option>
                                                    <option value="Website" selected>Website</option>


                                                </select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label>Project language/Framework</label>
                                            <div class="banner__inputlist">
                                                <select onChange={fiterProject}>
                                                    <option>Select Language</option>
                                                    <option value="Android">Android</option>
                                                    <option value="C/C++">C/C++</option>
                                                    <option value="Flutter">Flutter</option>
                                                    <option value="HTML">HTML</option>
                                                    <option value="IOS">IOS</option>
                                                    <option value="JAVA">JAVA</option>
                                                    <option value="JavaScript" selected>JavaScript</option>
                                                    <option value="Node JS">Node JS</option>
                                                    <option value="Python">Python</option>
                                                    <option value="PHP">PHP</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label>Professor Name</label>
                                            <div class="banner__inputlist">
                                                <select onChange={fiterProject}>
                                                    <option>Select Professor Name</option>

                                                    <option value="Prof BAOza">Prof BAOza
                                                    </option>

                                                    <option value="Prof HBPandya">Prof HBPandya
                                                    </option>
                                                    <option value="Prof HKGevariya">Prof HKGevariya
                                                    </option>
                                                    <option value="Prof HiteshRajpoot">Prof HiteshRajpoot
                                                    </option>

                                                    <option value="Prof JayDave">Prof JayDave
                                                    </option>
                                                    <option value="Prof KMPatel">Prof KMPatel
                                                    </option>

                                                    <option value="Prof MKShah" selected>Prof MKShah
                                                    </option>
                                                    <option value="Prof NikunjDomadiya">Prof NikunjDomadiya
                                                    </option>
                                                    <option value="Prof PGPatel">Prof PGPatel
                                                    </option>
                                                    <option value="Prof PinalSalot">Prof PinalSalot
                                                    </option>
                                                    <option value="Prof PRDave">Prof PRDave
                                                    </option>


                                                    <option value="Prof RJayswal">Prof RJayswal
                                                    </option>
                                                    <option value="Prof YogeshPatel">Prof YogeshPatel
                                                    </option>
                                                </select>
                                            </div>
                                        </div>



                                        <div class="col">
                                            <lable></lable>
                                            <button style={buttonStyle} type="submit" class="default-btn reverse d-block"><span style={spanStyle}>Find Your Project</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sections