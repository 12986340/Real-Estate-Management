
import { useState } from "react";
//import "../components/login.css";
// import './lo.css';
//import aptvideo from "./video/v1.mp4";
import { useFormik } from "formik";

import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { YupAdminLogin } from "../schemas/AdminYup";
import background from "./images/carousel3.jpg";

export default function AdminLogin() {
  return (
    <div>
      <AdminLoginTable />
    </div>
  );
}
const initialValues = {
  email: "",
  password: ""
}
function AdminLoginTable() {

  const navigate=useNavigate()
  
  const dispatch=useDispatch()

  const checkUser = async (email,password) => {
    let user = { userid:email, pwd: password };
    await axios.post("http://localhost:8080/api/admin/avalidate", user)
    .then(resp=>{
        sessionStorage.setItem("uname",resp.data.uname)
        sessionStorage.setItem("role",resp.data.role)
        sessionStorage.setItem("userid",resp.data.userid)
        sessionStorage.setItem("id",resp.data.id)
        dispatch({type:'IsLoggedIn'})
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome "+resp.data.role,
          showConfirmButton: false,
          timer: 1500,
      });
      navigate('/')
    })
    .catch(error=>{
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data          
        });   
    }) 
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
  useFormik({

    initialValues: initialValues,
    validationSchema: YupAdminLogin,
    onSubmit: (value) => {
      console.log(JSON.stringify(value));
      console.log(value.email)
      checkUser(value.email,value.password);
    }
  });  
  return (
    <>
    <div style={{border:'1px solid black'}}>

{/* <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={aptvideo} type="video/mp4" />
      </video> */}
      
      
      <div className="center shadow" style={{width:'700px',height:'400px'}}>
        <h5 className="p-3 text-center bg-dark rounded-top bg-gradient text-white shadow">Admin Login</h5>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span></span>
            <label>Email Id
            {errors.email && touched.email ? (<span className="errors">{errors.email}
              </span>) : null}
            </label>
          </div>
          <div className="txt_field">
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span></span>
            <label>Password
            {errors.password && touched.password ? (<span className="errors">{errors.password}
              </span>) : null}
            </label>
          </div>  
          <Link to="/login" className="pass d-block">User Login?</Link>      
          <input
            type="submit"
            value="Login"
            style={{backgroundColor:'grey'}}
          />    
        </form>
      </div>
    </div>
    </>
  );
}