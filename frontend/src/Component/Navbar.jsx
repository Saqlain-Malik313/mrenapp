import { useAuth } from "../Authh/Capi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { isLoggedin } = useAuth();
    return (
        <>
            <header>
                <div className="container  fixed-top">
                    <div className="logo-brand">
                        <NavLink to="/"><img src="/image/Malik-logo.png" height="50px" /></NavLink>
                    </div>

                    <nav style={{ marginLeft: "px" }}>
                        <ul>
                            <li>
                                <NavLink to="/"> Home </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"> About </NavLink>
                            </li>
                            <li>
                                <NavLink to="/service"> Services </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact"> Contact </NavLink>
                            </li>
                            {isLoggedin ?
                                (

                                    <>
                                        <li>
                                            <NavLink to='/profile'>Profile</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/logout'>Logout</NavLink>
                                        </li>
                                    </>
                                ) :
                                (
                                    <>
                                        <li>
                                            <NavLink to="/login">Login</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/signup"> Register </NavLink>
                                        </li>
                                    </>
                                )}

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
