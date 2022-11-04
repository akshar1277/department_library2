import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
	const current_page = window.location.href.split('/')[3]
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
    <a href={`/${current_page}`} className="scrollToTop"><i className="fa-solid fa-angle-up"></i></a>
    {/* <!-- scrollToTop ending here --> */}


    {/* <!-- ================> header section start here <================== --> */}
    <header className="header " id="navbar">
        
		<div className="header__bottom">
			<div className="container">
				<nav className="navbar navbar-expand-lg ">
					<Link className="navbar-brand" to='/'><span >Computer Department</span></Link>
					<button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler--icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div className="navbar-nav mainmenu">
							<ul>
								<li id='home' value="home" className={window.location.href.split('/')[3] === '' || window.location.href.split('/')[3] === '' ? "active" : 'inactive'}>
									<Link to="/" style={{color : window.location.href.split('/')[3] === '' ? 'white' : 'grey'}}>Home</Link>
									
								</li>
								<li value = 'projects' className={window.location.href.split('/')[3] === 'blog' ? "active" : 'inactive'}>
									<Link to="/blog" style={{color : window.location.href.split('/')[3] === 'blog' ? 'white' : 'grey'}} >All Projects</Link>
								</li>
								{/* <li>
									<Link to="/allmember">All Projects</Link>
									
								</li> */}
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