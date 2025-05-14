import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authh/Capi';
const url = `http://localhost:2000/login`





const Login = () => {
    
    const { StoreToken,saveid } = useAuth()

    useEffect(() => {
        document.title = "Login"
    }, []);

    const data = {
        email: "",
        password: "",

    }
    const navigate = useNavigate();

    const [input, setinput] = useState(data)

    const handle = (y) => {
        y.preventDefault()
        setinput({ ...input, [y.target.name]: y.target.value })


    }

    const handler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });
            const res_data = await response.json();

            if (res_data.message=="Account Login") {
                StoreToken(res_data.Token);
                saveid(res_data.UserId);
                setinput({ email: "", password: "" });
                navigate("/profile");
            } else {
                alert(res_data.message)
            }
        } catch (error) {
            console.log(error);
        }
    };
    return <>
        <section>
            <main>
                <div className='section-registration'>
                    <div className="containe grid  grid-two-cols">
                        <div className="registration-image">
                            <img src="/image/login.png" alt="login-form" width="400" height="500" />
                        </div>
                        <div className="registration-form">
                            <h1 className='main-heading mb-3'>Login Here</h1>
                            <br />
                            <form action="" onSubmit={handler}>
                                <div>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' name='email' id='email' placeholder='Email' onChange={handle} required autoComplete='off' />
                                </div>

                                <div>
                                    <label htmlFor='password'>password</label>
                                    <input type='password' name='password' id='password' placeholder='Password' onChange={handle} required autoComplete='off' />
                                </div>
                                <div style={{ marginBottom: "3px" }}>
                                    <button type='submit' className='btn btn-submit'>Login-Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}

export default Login