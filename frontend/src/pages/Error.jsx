import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    useEffect(()=>{
            document.title="Error-404"
        },[])
  return (
    <>
    <section  id='error-page'>
        <div className="content">
            <div className="header">
                <h4> Sorry ! page not found</h4>
                <p>
                    file does not exist.
                    if you are believe  there's an issue , feel free to report it,
                </p>
                <div className="btns">
                    <NavLink to='/'> Return Home</NavLink>
                    <NavLink to="/contact">Report Isuue</NavLink>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Error