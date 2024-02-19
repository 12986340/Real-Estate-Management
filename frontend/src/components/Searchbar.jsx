import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Search.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Searchbar() {
    const navigate=useNavigate()
    const [city,setcity]=useState('All')
    const [atype,setatype]=useState('All')
    const [furnish,setfurnish]=useState('All')
    const handleSearch=e=>{
        e.preventDefault()
        console.log("OK search")
        navigate("/search",{state:{city:city,atype:atype,furnish:furnish}})
    }
    return (
    
        <>
        <div class="container-fluid mb-5 wow fadeIn search" data-wow-delay="0.1s">
            <div class="container bg-danger">
                <div class="row g-2 ">
                    <div class="col-md-10">
                        <div class="row g-2">
                            <div class="col-md-4">
                            <select class="form-select border-0 py-3" onChange={e=>setatype(e.target.value)}>
                                    <option value="All">BHK Type</option>
                                    <option>1 RK</option>
                                    <option>1 BHK</option>
                                    <option>2 BHK</option>
                                    <option>3 BHK</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3" onChange={e=>setcity(e.target.value)}>
                                <option value="All">Location</option>
                                 <option>Nashik</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3" onChange={e=>setfurnish(e.target.value)}>
                                <option value="All">Furnishing</option>
                                 <option>Full Furnished</option>
                                 <option>Semi Furnished</option>
                                 <option>Unfurnished</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button onClick={handleSearch} class="btn btn-dark border-0 w-100 py-3">Search</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );}