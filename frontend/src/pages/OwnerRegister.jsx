
import React from "react";
//import '../components/Error.css'
import "../components/login.css";
import "../components/3.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import swal from "sweetalert2";
import { SignUpOwner } from "../schemas/SignUpOwnerYup";


const initialValues = {

  name: "",
  email: "",
  gender: "",
  contactno: "",
  password: "",
  address: "",
  question: "",
  answer: "",

}

export default function OwnerRegister() {
  return (
    <div>
      <OwnerRegisterTable />
    </div>
  );
}

function OwnerRegisterTable() {

  const navigate = useNavigate();
  const [uidPic, setadharcardimage] = useState("");
  const [lightbillPic, setlightbillimage] = useState("");
  const handleFileInput = e => {
    if (e.target.name === 'lightbill') {
      setlightbillimage(e.target.files[0])
    } else {
      setadharcardimage(e.target.files[0])
    }
  }
  const { values, errors, touched, handleChange, handleBlur, handleSubmit }
    = useFormik({

      initialValues: initialValues,
      validationSchema: SignUpOwner,
      onSubmit: async (value) => {
        console.log("SignUp Owner..done");

        if (uidPic === "" || uidPic === null || lightbillPic === "" || lightbillPic === null) {
          swal.fire({
            position: "center",
            title: "Please Upload Image",
            timer: 1500,
          });
          return
        }


        const fd = new FormData()
        fd.append("name", value.name)
        fd.append("userid", value.email)
        fd.append("gender", value.gender)
        fd.append("phone", value.contactno)
        fd.append("pwd", value.password)
        fd.append("uidfile", uidPic)
        fd.append("lightbillfile", lightbillPic)
        fd.append("question", value.question)
        fd.append("answer", value.answer)
        fd.append("address", value.address)
        console.log(fd)

        const url = `http://localhost:8080/api/owners`;
        await axios.post(url, fd)
          .then(resp => {
            swal.fire({
              position: "center",
              icon: "success",
              title: "Registered Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/login")
          })
          .catch(error => {
            swal.fire({
              position: "center",
              icon: "error",
              title: error.response.data,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  return (
    <div className="container mt-5">
      <div className="title">Seller Registration Form</div>
      <form onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name
              {errors.name && touched.name ? (<span className="errors">{errors.name}
              </span>) : null}
            </span>
            <input
              type="text"
              placeholder="Enter your name"
              id="firstName"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <span className="details">Address
              {errors.address && touched.address ? (<span className="errors">{errors.address}
              </span>) : null}
            </span>
            <input
              type="text"
              placeholder="Enter your address"
              id="emailid"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <span className="details">Mobile Number
              {errors.contactno && touched.contactno ? (<span className="errors">{errors.contactno}
              </span>) : null}

            </span>
            <input
              type="number"
              maxLength={10}
              minLength={10}
              placeholder="Enter your number"
              id="mobileNo"
              name="contactno"
              value={values.contactno}
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </div>


          <div className="input-box">
            <span className="details">Email
              {errors.email && touched.email ? (<span className="errors">{errors.email}
              </span>) : null}
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <span className="details">Password
              {errors.password && touched.password ? (<span className="errors">{errors.password}
              </span>) : null}
            </span>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box border-0">
            <span className="details">Electricity Bill Image</span>
            <input
              type="file"
              className="form-control"
              name="lightbill"
              onChange={handleFileInput}
            />
          </div>
          <div className="input-box">
            <span className="details">Security Question

              {errors.question && touched.question ? (<span className="errors">{errors.question}
              </span>) : null}
            </span>
            <select
              name="question"
              value={values.question}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select Security Question</option>
              <option>What is your nick name ?</option>
              <option>Which is your favorite pet name ?</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Answer
              {errors.answer && touched.answer ? (<span className="errors">{errors.answer}
              </span>) : null}
            </span>
            <input
              type="text"
              name="answer"
              placeholder="Enter your Answer"
              value={values.answer}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <span className="details">Adhar Card Photo
              {errors.uidPic && touched.uidPic ? (<span className="errors">{errors.uidPic}
              </span>) : null}
            </span>
            <input
              type="file"
              className="form-control"
              placeholder="Upload Aadhar Card"
              id="formFileSm"
              accept=".jpg,.png,.jpeg"
              name="uidPic"
              onChange={handleFileInput}
            />
          </div>
        </div>
        <div className="gender-details">
          <input
            type="radio"
            name="gender"
            id="dot-1"
            value="Male"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            type="radio"
            name="gender"
            id="dot-2"
            value="Female"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            type="radio"
            name="gender"
            id="dot-3"
            value="NA"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="gender-title">Gender
            {errors.gender && touched.gender ? (<span className="errors">{errors.gender}
            </span>) : null}
          </span>
          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one"></span>
              <span className="gender">Male</span>
            </label>
            <label htmlFor="dot-2">
              <span className="dot two"></span>
              <span className="gender">Female</span>
            </label>
            <label htmlFor="dot-3">
              <span className="dot three"></span>
              <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" className="bg-info bg-gradient" value="Submit" />
        </div>
      </form>
    </div>
  );
}