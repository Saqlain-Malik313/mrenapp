import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authh/Capi';
const url = `http://localhost:2000/register`

const Sign = () => {

    const{StoreToken,saveid}=useAuth()


    useEffect(() => {
        document.title = "Register"
    }, [])
    const data = {
        username: "",
        email: "",
        phone: "",
        password: "",

    }
    const navigate = useNavigate()

    const [input, setinput] = useState(data)

    const handle = (y) => {
        y.preventDefault()
        setinput({ ...input, [y.target.name]: y.target.value })


    }

    const handler = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });
            const res_data = await response.json();
            console.log(res_data)

            if (response.ok) {
                StoreToken(res_data.Token);
                saveid(res_data.UserId);
                setinput({ username:"",email: "",phone:"", password: "" });
                console.log("register successful");
                navigate("/login");
            } else {
                alert(res_data.errors)
                console.log("invalid credential");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        <section>
            <main>
                <div className='section-registration'>
                    <div className="containe grid  grid-two-cols">
                        <div className="registration-image">
                            <img src="/image/register.png" alt="registration-form" width="400" height="500" />
                        </div>
                        <div className="registration-form">
                            <h1 className='main-heading mb-3'>Registration Here</h1>
                            <br />
                            <form action="" onSubmit={handler}>
                                <div>
                                    <label htmlFor='username'>username</label>
                                    <input type='text' name='username' id='username' placeholder='Username' onChange={handle} required autoComplete='off' />
                                </div>
                                <div>
                                    <label htmlFor='email'>email</label>
                                    <input type='email' name='email' id='email' placeholder='Email' onChange={handle} required autoComplete='off' />
                                </div>
                                <div>
                                    <label htmlFor='phone'>phone</label>
                                    <input type='number' name='phone' id='phone' placeholder='Phone' onChange={handle} required autoComplete='off' />
                                </div>
                                <div>
                                    <label htmlFor='password'>password</label>
                                    <input type='password' name='password' id='password' placeholder='Password' onChange={handle} required autoComplete='off' />
                                </div>
                                <div style={{ marginBottom: "3px" }}>
                                    <button type='submit' className='btn btn-submit'>Register-Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}

export default Sign