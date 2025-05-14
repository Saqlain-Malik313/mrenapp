import React from 'react'

const Pro = ({ id, name, email, phone }) => {
    if (id == localStorage.getItem("ID")) {
        return (
            <div className='section-registration'>
                <h1 style={{ marginBottom: "50px" }}>Profile</h1>
                <div className='containe grid  grid-two-cols'>
                    <div className='registration-image'>
                        <img src="/image/bike.jpg" alt="registration-form" width="400" height="500" />
                    </div>
                    <div className="card text-start registration-form">
                        <div className="card-body ">
                            <div>
                                <label>Name</label>
                                <h1 className="card-title" key={name}>{name}</h1>
                            </div>
                            <div>
                                <label>Email</label>
                                <h2 className="card-title" key={email}>{email}</h2>
                            </div>
                            <div>
                                <label>Phone</label>
                                <h2 className="card-title" key={phone}>{phone}</h2>
                            </div>                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Pro