import { Analytics } from "../Component/Analytics";
import React, { useEffect } from 'react'
 const Home = () => {
    useEffect(()=>{
            document.title=`Home`
        },[])
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the World Best IT Company</p>
                            <h1>Welcome to Malik Technical</h1>
                            <p>
                                Ready to elevate your business with cutting-edge IT solutions? At MalikTechnical,
                                we deliver innovative, tailored IT services to meet your unique needs!
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact" >
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>

                        {/* hero images  */}
                        <div className="hero-image">
                            <img
                                src="/image/home.png"
                                alt="coding together"
                                width="400"
                                height="500"
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section  */}
            <Analytics/>
            {/* 3rd section  */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    {/* hero image  */}
                    <div className="hero-image">
                        <img
                            src="/image/design.png"
                            alt="coding together"
                            width="400"
                            height="500"
                        />
                    </div>

                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>Take the first step toward a smarter, more secure IT infrastructure! Contact Thapa Technical today for a free consultation and unlock your business’s digital potential.</p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">connect now</button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">learn more</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;