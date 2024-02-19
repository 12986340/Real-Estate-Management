// import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SearchResult from "../pages/SearchResult";

export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = e => {
        dispatch({ type: 'LogOut' })
        sessionStorage.clear();
        navigate("/");
    }
    // const [gender,setgender]=useState('All')
    // const [atype,setatype]=useState('All')
    // const [furnish,setfurnish]=useState('All')
    // const handleSearch=e=>{
    //     e.preventDefault()
    //     console.log("OK search")
    //     navigate('/search',{state:{gender:gender,atype:atype,furnish:furnish}})
    // }
    const state = useSelector((state) => state);
    console.log("LoggedIn ", state.loggedin.IsLoggedIn)
    const isadmin = state.loggedin.IsLoggedIn && sessionStorage.getItem("role") === "Admin" ? true : false;
    const isowner = state.loggedin.IsLoggedIn && sessionStorage.getItem("role") === "Owner" ? true : false;
    const isuser = state.loggedin.IsLoggedIn && sessionStorage.getItem("role") === "Customer" ? true : false;
    const profile = isowner ? "/oprofile" : (isuser ? "/uprofile" : "/");
    
   
    return (

        <div>
            <nav className="navbar fixed-top navbar-expand-lg   bg-light text-black fw-bold ">
                <div className="container-fluid ">
                    <Link className="navbar-brand    p-2" to="/aboutus">Property_Pulse |</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav" style={{ alignContent: 'end', textAlign: 'end', justifyItems: 'end' }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ alignContent: 'end', textAlign: 'end', justifyItems: 'end' }}  >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        
                            {isadmin ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/owners">Sellers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/users">Buyers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/apartments">Apartments</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/feedbacks">Feedbacks</Link>
                                    </li>
                                </>
                            ) : ""}
                            {isowner ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/apartments">Apartments</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/myusers">Buyers</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link to={profile} className="nav-link active" aria-current="page">Profile</Link>
                                    </li>
                                    {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/mypayments">Payments</Link>
            </li>  */}
                                </>
                            ) : ""}
                            {isuser ? (
                                <>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/mybookings">Bookings</Link>
                                    </li> */}
                
                                    <li className="nav-item">
                                        <Link to={profile} className="nav-link active" aria-current="page">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/feedback">Feedback</Link>
                                    </li>
                                </>
                            ) : ""}
                            {!state.loggedin.IsLoggedIn ? (<>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                </li>
                                {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin">Admin </Link>
           </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/cregister">Buyer's Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/oregister">Seller's Signup</Link>
                                </li>
                            </>
                            ) : (
                                <>
                                    
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link active" aria-current="page" onClick={logout}>Logout</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        <li type='none' className="nav-item">
                            <label style={{ textAlign: 'justify'}}>{state.loggedin.Username} </label>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}

