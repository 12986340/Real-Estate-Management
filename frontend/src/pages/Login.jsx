
 import "../components/login.css";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import aptvideo from "./video/e.mp4";
import { YupLogin } from "../schemas/LoginYup";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function Login() {

  return (
    <div>
      <LoginTable />

    </div>
  );
}
const initialValues = {

  email: "",
  password: "",

}

function LoginTable() {

  const navigate = useNavigate()

  const dispatch = useDispatch()


  const checkUser = async (email, password) => {
    let user = { userid: email, pwd: password };
    await axios.post("http://localhost:8080/api/admin/validate", user)
      .then(resp => {
        sessionStorage.setItem("uname", resp.data.uname)
        sessionStorage.setItem("role", resp.data.role)
        sessionStorage.setItem("userid", resp.data.userid)
        sessionStorage.setItem("id", resp.data.id)
        dispatch({ type: 'IsLoggedIn' })
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome " + resp.data.role,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/')
      })
      .catch(error => {
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
      validationSchema: YupLogin,
      onSubmit: (value) => {

        checkUser(value.email, value.password);

      }


    });


 return (

  <>
    <div className="bgimage1">

{/* <img src="../components/images/a.jpg" style={{zIndex:'2',width:'100px'}} alt="56522121" /> */}


      {/* <video
       autoPlay
        loop
        muted
        style={{
          // position: "relative",
         // width: "100%",
          //left: "50%",
         // top: "50%",
         // height: "100%",
          //objectFit: "cover",
         // transform: "translate(-50%,-50%)",
         // zIndex: "-1",
        }}
      >
         <source  src={aptvideo} type="video/mp4" />
       </video>     */}


      <div className="center shadow" style={{width:'700px',height:'400px'}}>
         <h5 className="p-3 text-center bg-success rounded-top bg-gradient text-white">Login</h5>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              name="email"
              type="email"
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
          <Link to="/forgotpwd" className="pass d-block">Forgot Password?</Link>
          <Link to="/admin" className="pass d-block">Admin Login?</Link>

          <input
            type="submit"
            value="Login"
          />
        </form> 
      </div>
      </div>
      </>
  );
}



