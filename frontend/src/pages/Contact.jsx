import React, { useEffect, useState } from 'react'
import axios from 'axios';



const Contact = () => {
  useEffect(()=>{
    document.title="Contact"
  })
  const data = {
    username: "",
    email: "",
    message: ""

  }

  const [input, setinput] = useState(data)

  const handle = (y) => {
    y.preventDefault()
    setinput({ ...input, [y.target.name]: y.target.value })


  }

  const handler = (e) => {
    e.preventDefault()
    {
      axios.post(`http://localhost:2000/contact`, input)
        .then(res => {
          alert(res.data.message)
        }).catch(
      )

      console.log()
    }
  }
  return <>
    <section className='section-contact'>
      <div className="contact-content container">
        <h1 className="main-heading">
          Contact-us
        </h1>
      </div>
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img src='/image/support.png' alt='we are here to help you' />
        </div>
        <section className="section-form">

          <form action="" onSubmit={handler}>
            <div>
              <label htmlFor='username'>Username</label>
              <input type='username' name='username' id='username' placeholder='username' onChange={handle} autoComplete='off' />
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' placeholder='email' onChange={handle} autoComplete='off' />
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea type='message' name='message' id='message' placeholder='message' onChange={handle} rows="10" cols="30" autoComplete='off' />
            </div>
            <div>
            <button type='submit' className='btn btn-success'>submit-Now</button>
            </div>
          </form>
        </section>
      </div>
      <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
    </section>
  </>
}

export default Contact