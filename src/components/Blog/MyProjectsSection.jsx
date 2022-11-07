import React from 'react'
import { useState } from 'react';
import AllProjectsmap from './AllProjectsmap';

const MyProjectsSection = () => {

    const [query, setQuery] = useState("")
    // console.log(query);

    const search = (data) => {
        return data.filter(
            (items) =>
                items.desc.toLowerCase().includes(query)
               
        );
    }
    return (
        <>
            <div className="about about--style3 padding-top pt-xl-0">

                

                    <div className="section__wrapper wow fadeInUp " data-wow-duration="1.5s" id='bigbox'>
                        <div class="col-sm-10 mx-auto w-50 my-10 ">
                            <input type="name" class="form-control" placeholder='Search Anything Related to Projects' value={query} onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                        </div>


                        <form action="#" className='mt-6' id='box'>
                            <div className="banner__list">
                                <div className="row align-items-center row-cols-xl-5 row-cols-lg-5 row-cols-sm-2 row-cols-1">
                                    <div className="col">
                                        <label>Select Year</label>
                                        <div className="banner__inputlist">
                                            <select>

                                                <option value="1" selected>2019-20</option>
                                                <option value="2">2020-21</option>
                                                {/* <option value="3">3</option>
										<option value="4">4</option> */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label>Internal Guide</label>
                                        <div className="banner__inputlist">
                                            <select>
                                                <option>Select Guide</option>
                                                <option value="tachampaneriya">Prof TAChampaneriya</option>
                                                <option value="prachipancholi" selected>Prof PrachiPancholi</option>
                                                <option value="hbpandya">Prof HBPandya</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col ">
                                        <label>Age</label>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="banner__inputlist">
                                                    <select>
                                                        <option value="18" selected>18</option>

                                                        <option value="37">37</option>
                                                        <option value="38">38</option>
                                                        <option value="39">39</option>
                                                        <option value="40">40</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="banner__inputlist">
                                                    <select>
                                                        <option value="18">18</option>

                                                        <option value="25" selected>25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>

                                                        <option value="38">38</option>
                                                        <option value="39">39</option>
                                                        <option value="40">40</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label>Country</label>
                                        <div className="banner__inputlist">
                                            <select id="country" name="country">
                                                <option value="Afganistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>

                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <button type="submit" className="default-btn reverse d-block"><span>Find Your project</span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                
            </div>


            <AllProjectsmap></AllProjectsmap>
        </>
    )
}

export default MyProjectsSection