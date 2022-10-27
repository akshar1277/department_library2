import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer overflow-hidden">
		<div className="footer__top bg_img" style={ {backgroundImage: "url('assets/images/footer/bg-3.jpg')"}} >
			

			<div className="footer__toparea padding-top padding-bottom wow fadeInUp" data-wow-duration="1.5s">
				<div className="container">
					<div className="row g-5 g-lg-0" >
                        <div className='col-lg-6 col-sm-6 col-12 '>
                        <div className="" style={{
							marginBottom:'45px'
						}}>
							<div className="footer__newsletter--area" style={{
                                display:'flex',
                                flexDirection:'row'
                            }}>
								<div className="footer__newsletter--title me-xl-4" style={{
                                display:'flex',
                                justifyContent:'center',
								width:'auto'
                            }}>
									<h4>Join Community</h4>
								</div>
								<div className="footer__newsletter--social" style={{
                                        
                                      
										width:'60%',
                                        display:'flex',
                                        justifyContent:'center'
                                    }} >
									
                                    <ul style={{
                                        display:'flex',
                                        justifyContent:'space-between',
                                        width:'100%'
                                    }}>
										
										
										<li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
										<li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
										<li><a href="#"><i className="fa-brands fa-facebook-messenger"></i></a></li>
									</ul>
                                                                       
								</div>
							</div>
						</div>

                        <div className="">
							<div className="footer__newsletter--area">
								<div className="footer__newsletter--title" style={{
                                display:'flex',
                                flexDirection:'row',
								marginBottom:'10px'
                            }}>
									<h4 style={{
                                display:'flex',
                                justifyContent:'center',
								width:'auto'
                            }}>Newsletter Sign up</h4>
								</div>
								<div className="footer__newsletter--form" style={{
									
									width:'80%'
								}}>
									<form action="#">
										<input type="email" placeholder="Your email address"/>
										<button type="submit" className="default-btn"><span>Subscribe</span></button>
									</form>
								</div>
							</div>
						</div>
                        </div>
                    
                    
						
						
						<div className="col-lg-3 col-sm-6 col-12" style={{paddingLeft:'30px'}}>
							<div className="footer__item">
								<div className="footer__inner">
									<div className="footer__content" >
										<div className="footer__content--title"  style={{textAlign:'left'}}>
											<h4>About</h4>
										</div>

										<div className="footer__content--desc" style={{textAlign:'left',color:'white'}}>
											<p>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro in fugiat neque dolore illum enim pariatur magnam, eligendi incidunt dolores atque est esse maiores! Hic!
                                            </p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6 col-12">
							<div className="footer__item">
								<div className="footer__inner">
									<div className="footer__content">
										<div className="footer__content--title">
											<h4>Community</h4>
										</div>
										<div className="footer__content--desc">
											<ul>
												<li><a href="#"><i className="fa-solid fa-angle-right"></i> Privacy policy</a></li>
												<li><a href="#"><i className="fa-solid fa-angle-right"></i> End User Agreements</a></li>
												<li><a href="#"><i className="fa-solid fa-angle-right"></i> Refund Policy</a></li>
												<li><a href="#"><i className="fa-solid fa-angle-right"></i> Cookie policy</a></li>
												<li><a href="#"><i className="fa-solid fa-angle-right"></i> Report abuse</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
	</footer>
   

    </>
  )
}

export default Footer