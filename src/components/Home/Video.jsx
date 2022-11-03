import React from 'react'

const Video = () => {
    return (
        <>
            <div className="work work--style2 padding-top padding-bottom bg_img" >
                <div className="container">
                    <div className="section__wrapper">
                        <div className="row g-4 justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-12 wow fadeInLeft" data-wow-duration="1.5s">
                                <div className="work__content" style={{ textAlign: 'start', width: '90%' }}>
                                    <h3>Lorem, ipsum.</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At qui voluptatum quis dolorum quo sequi! Mollitia recusandae officia esse atque non magni nulla error cumque dolore, vitae tenetur maiores quaerat soluta quas? Nisi iure, accusantium soluta dolorem itaque sit? Amet, vel. Dolore illum dolor tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quidem illum doloremque deleniti nemo. Quae deserunt aspernatur fugit debitis provident, neque rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ipsa recusandae repellat magni eos facere iure, hic atque expedita, molestiae eveniet reprehenderit laudantium.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8 col-12 wow fadeInRight" data-wow-duration="1.5s">
                                <div className="work__content" style={{ textAlign: 'start', width: '90%' }}>
                                    <video className='video1' controls >
                                        {/* <source src="https://youtu.be/ekQLGA2xHgk"
                                            type="video/mp4" /> */}


                                    </video>
                                    {/* <div class="video">
                                        <a href="https://youtu.be/ekQLGA2xHgk">
                                            <div class="play-btn">
                                                <ion-icon name="play"></ion-icon>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video