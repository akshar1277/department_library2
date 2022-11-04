import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    {/* <!-- preloader start here --> */}
    {/* <div className="preloader">
        <div className="preloader-inner">
            <div className="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div> */}
	{/* <!-- preloader ending here --> */}


	{/* <!-- scrollToTop start here --> */}
    <a href="/#" className="scrollToTop"><i className="fa-solid fa-angle-up"></i></a>
    {/* <!-- scrollToTop ending here --> */}


    {/* <!-- ================> header section start here <================== --> */}
    <header className="header" id="navbar" style={{background : '#212121'}}>
        
		<div className="header__bottom">
			<div className="container">
				<nav className="navbar navbar-expand-lg">
					<Link className="navbar-brand" to='/'><img src="assets/images/logo/logo.png" alt="logo"/></Link>
					<button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler--icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div className="navbar-nav mainmenu">
							<ul>
								<li className="active">
									<Link to="/">Home</Link>
									
								</li>
								{/* <li>
									<Link to="/allmember">All Projects</Link>
									
								</li> */}
								<li>
									<Link to="/blog">All Projects</Link>
									
								</li>
															</ul>
						</div>
						{/* <div className="header__more">
                            <button className="default-btn dropdown-toggle" type="button" id="moreoption" data-bs-toggle="dropdown" aria-expanded="false">My Account</button>
                            <ul className="dropdown-menu" aria-labelledby="moreoption">
                                <li><Link to='/login' className="dropdown-item" >Log In</Link></li>
                                <li><Link to='/signup'   className="dropdown-item" >Sign Up</Link></li>
                            </ul>
						</div> */}
					</div>
				</nav>
			</div>
		</div>
    </header>
    </>
  )
}

export default Navbar