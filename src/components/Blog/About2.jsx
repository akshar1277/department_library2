import React from 'react'
import axios from "axios";

const About2 = () => {
  return (
    <>
    <div className="about about--style3 padding-top pt-xl-0">
		<div className="container">
			<div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
				<form action="#">
					<div className="banner__list">
						<div className="row align-items-center justify-content-center ">
							
							<div className="col-9">
							<div className="banner__list">
								
                            <input style={{height:"52px"}} type="name" class="form-control" placeholder='Search Anything Related to Projects' />
							</div>
                        	</div>
								
							
							
							
							<div className="col-3">
								<button type="submit" className="default-btn reverse d-block"><span>Find Your project</span></button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>

	

    </>
  )
}

export default About2