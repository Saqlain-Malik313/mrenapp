import React, { useEffect } from 'react'

const Service = () => {
  useEffect(() => {
    document.title = "Services"
  }, [])
  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services </h1>
      </div>

      <div className="container grid grid-three-cols">


        <div className="card" key="">
          <div className="card-img">
            <img
              src="/image/design.png"
              alt="our services info"
              width="200"
            />
          </div>

          <div className="card-details">
            <div className="grid grid-two-cols">
              <p>malik</p>
              <p>24</p>
            </div>
            <h2>stark</h2>
            <p>biker</p>
          </div>
        </div>


      </div>
    </section>
  );

}

export default Service