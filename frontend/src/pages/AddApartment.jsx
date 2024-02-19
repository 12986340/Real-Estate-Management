

import React, { useState } from "react";
import axios from "axios";
import "../components/3.css";
import {  useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import {AddApartmentYuup} from '../schemas/AddApartmentYup'
import { useFormik } from "formik";
const initialValues = {

name:"",
address:"",
city:"",
state:"",
furnish :"",
flattype:"",
parking:"",
balcony:"",
facing:"",
//ebill:"",
extra:"",
//gender:"",
rent:"",
buildingIs:"",
propertyFor:"",
builtupArea:"",
}

export default function AddApartment() {
  return (
    <div>
      <AddApartmentTable />
    </div>
  );
}

function AddApartmentTable() {
  const navigate=useNavigate()
  
  const [pic1, setpic1] = useState("");
  const [pic2, setpic2] = useState("");
  const [pic3, setpic3] = useState("");
  const [pic4, setpic4] = useState("");

  const handleFile1Input=e=>{
      setpic1(e.target.files[0])
  }
  const handleFile2Input=e=>{
      setpic2(e.target.files[0])
  }
  const handleFile3Input=e=>{
      setpic3(e.target.files[0])
  }
  const handleFile4Input=e=>{
      setpic4(e.target.files[0])
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
  

    initialValues: initialValues,
    validationSchema: AddApartmentYuup,
    onSubmit:  async (value) => {

      console.log(errors)
    const fd=new FormData()
    fd.append("name",value.name)
    fd.append("city",value.city)
    fd.append("state",value.state)
    fd.append("rent",value.rent)
    fd.append("flattype",value.flattype)
    fd.append("parking",value.parking)
    fd.append("balcony",value.balcony)
    fd.append("facing",value.facing)
    fd.append("pic1",pic1)    
    fd.append("pic2",pic2)    
    fd.append("pic3",pic3)    
    fd.append("pic4",pic4)    
    fd.append("furnishtype",value.furnish)
    //fd.append("gender",value.gender)
    fd.append("address",value.address)
   // fd.append("lightbill",value.ebill)
    fd.append("extra",value.extra)
    fd.append("buildingIs",value.buildingIs)
    fd.append("propertyFor",value.propertyFor)
    fd.append("builtupArea",value.builtupArea)
    fd.append("ownerid",sessionStorage.getItem("id"))



    if(pic1===""||pic1===undefined||pic1===null||pic2===""||pic2===undefined||pic2===null
    ||pic3===""||pic3===undefined||pic3===null||pic4===""||pic4===null||pic4===undefined)
    {  swal.fire({
        position: "center",
        title: "Please Upload Image",
        timer: 1500,
      });
      return
    }
    const url = `http://localhost:8080/api/apartments`;
    await axios.post(url, fd)
    .then(resp=>{
      swal.fire({
            position: "center",
            icon: "success",
            title: "Apartment Added..",
            showConfirmButton: false,
            timer: 1500,
          });
      navigate("/apartments")
    })
    .catch(error=>{
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
console.log(pic1);
console.log(pic2);
console.log(pic3);
console.log(pic4);
  return (
    <div className="container mt-5">
      <div className="title">Building Registration</div>
      <form onSubmit={handleSubmit} >
        <div className="user-details">
          <div className="input-box">
            <span className="details">Building Name
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
              placeholder="Enter address"
              id="emailid"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <span className="details">City
            {errors.city && touched.city ? (<span className="errors">{errors.city}
              </span>) : null}
            </span>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}             
            />
          </div>          
          
          <div className="input-box">
            <span className="details">State
            {errors.state && touched.state ? (<span className="errors">{errors.state}
              </span>) : null}
            </span>
            <input
              type="text"
              placeholder="Enter state"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </div>
          <div className="input-box">
            <span className="details">Rent/Sell Amount
            {errors.rent && touched.rent ? (<span className="errors">{errors.rent}
              </span>) : null}
            </span>
            <input
              type="number"
              min={1}
              placeholder="Enter your amount"
              name="rent"
              value={values.rent}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {/* <div className="input-box">
            <span className="details">Electricity bill
            {errors.ebill && touched.ebill ? (<span className="errors">{errors.ebill}
              </span>) : null}
            </span>
            <input
              type="number"
              min={1}
              name="ebill"
              placeholder="Enter your rent"
              value={values.ebill}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div> */}
          <div className="input-box">
            <span className="details">Extra Features
            {errors.extra && touched.extra ? (<span className="errors">{errors.extra}
              </span>) : null}
            </span>
            <input
              type="text"              
              placeholder="Enter extra features"
              name="extra"
              value={values.extra}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          
          {/* <div className="input-box">
            <span className="details">Gender
            {errors.gender && touched.gender ? (<span className="errors">{errors.gender}
              </span>) : null}            
            </span>
            <select
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
            //  required
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div> */}
          <div className="input-box">
            <span className="details">Select BHK Type
            {errors.flattype && touched.flattype ? (<span className="errors">{errors.flattype}
              </span>) : null}
            </span>
            <select
              name="flattype"
              value={values.flattype}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select Type</option>
              <option>NA</option>
              <option>1 RK</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
             
            </select>
          </div>
          <div className="input-box">
            <span className="details">Parking
            {errors.parking && touched.parking ? (<span className="errors">{errors.parking}
              </span>) : null}
            </span>
            <select
            name="parking"
              value={values.parking}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select One</option>
              <option>Not Available</option>
              <option>Available</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Number Of Balcony
            {errors.balcony && touched.balcony ? (<span className="errors">{errors.balcony}
              </span>) : null}
            </span>
            <select
            name="balcony"
              value={values.balcony}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select One</option>
              <option>Not Available</option>
              <option>1 </option>
              <option>2 </option>
              <option>3</option>
            </select>
            </div>
          <div className="input-box">
            <span className="details">Select Furnish Type
            {errors.furnish && touched.furnish ? (<span className="errors">{errors.furnish}
              </span>) : null}
            </span>
            <select
              name="furnish"
              value={values.furnish}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select Type</option>
              <option>Full Furnished</option>
              <option>Semi Furnished</option>
              <option>Unfurnished</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Facing
            {errors.facing && touched.facing ? (<span className="errors">{errors.facing}
              </span>) : null}
            </span>
            <select
              name="facing"
              value={values.facing}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select one</option>
              <option>North</option>
              <option>East</option>
              <option>West</option>
              <option>south</option>
              <option>Other</option>
              
            </select>
          </div>
          <div className="input-box">
            <span className="details">About Building
            {errors.buildingIs && touched.buildingIs ? (<span className="errors">{errors.buildingIs}
              </span>) : null}
            </span>
            <select
              name="buildingIs"
              value={values.buildingIs}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select one</option>
              <option>Flat</option>
              <option>House</option>
              <option>Office</option>
              <option>Shop</option>
              
            </select>
          </div>
          <div className="input-box">
            <span className="details">Property For
            {errors.propertyFor && touched.propertyFor ? (<span className="errors">{errors.propertyFor}
              </span>) : null}
            </span>
            <select
              name="propertyFor"
              value={values.propertyFor}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select One</option>
              <option>Rent</option>
              <option>Sell</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Builtup Area
            {errors.builtupArea && touched.builtupArea ? (<span className="errors">{errors.builtupArea}
              </span>) : null}
            </span>
            <input
              type="number"
              min={0}
              placeholder="Enter builtup area"
              name="builtupArea"
              value={values.builtupArea}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 1</span>
            <input
              type="file"
              placeholder="First Photo"
               onChange={handleFile1Input}
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 2</span>
            <input
              type="file"
              placeholder="First Photo"
             onChange={handleFile2Input}
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 3</span>
            <input
              type="file"
              placeholder="First Photo"
             onChange={handleFile3Input}
             
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 4</span>
            <input
              type="file"
              placeholder="First Photo"
             onChange={handleFile4Input}
             
            />
          </div>
        </div>
        
        <div className="button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
