import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Analytics } from '../Component/Analytics'

const About = () => {
  useEffect(()=>{
          document.title="About"
      },[])
  return (
    <>
      <main>
        <section className='section-hero'>
          <div className='container grid grid-two-cols'>
            <div className="hero-content">
              <p> welcome Stark</p>
              <h1>Why choose us?</h1>
              <p>
                Expertise: Our team of experienced IT professionals stays ahead of industry trends to deliver cutting-edge solutions.
              </p>
              <p>
                Customization: We tailor IT solutions to fit your unique business needs and goals, ensuring maximum efficiency and success.
              </p>
              <p>
                Customer-Centric Approach: Your satisfaction is our priority—we provide exceptional support to resolve all your IT concerns efficiently.
              </p>
              <p>
                Affordability: Get top-quality IT services at competitive prices without compromising on excellence.
              </p>
              <p>
                Reliability: Trust us to keep your IT environment secure and available 24/7, ensuring uninterrupted business operations.
              </p>
              <div className="btn btn-group">
                <NavLink to='/contact'>
                  <button className='btn  '>connect-now</button>
                </NavLink>
                <NavLink to='/service'>
                  <button className='btn secondary-btn'>learn-more</button></NavLink>
              </div>

            </div>
            <div className='hero-image'>
              <img src='/image/about.png' alt='home-page' width='400' height='500' />
            </div>

          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}

export default About