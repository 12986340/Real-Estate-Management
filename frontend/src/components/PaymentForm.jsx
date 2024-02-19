// import axios from 'axios'
// import { useState } from 'react'
// import Swal from 'sweetalert2'
// import { useNavigate } from 'react-router-dom'

// export default function PaymentForm(item) {
//   console.log(item)
//   const [cardno, setcardno] = useState()
//   const [nameoncard, setnameoncard] = useState()
//   const [amount, setamount] = useState()
//   const navigate = useNavigate()
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (
//       amount === undefined ||
//       cardno == undefined ||
//       nameoncard === undefined
//     ) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Please provide all information',
//       })
//       return
//     }
//     if (amount < 100) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Amount must be greater than 100',
//       })
//       return
//     }
//     if (amount > item?.id?.rent + item?.id?.lightbill) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Amount must be less than the total',
//       })
//       return
//     }
//     const data = {
//       apid: item?.id?.id,
//       userid: sessionStorage.getItem('id'),
//       cardno: cardno,
//       nameoncard: nameoncard,
//       amount: amount,
//     }

//     axios
//       .post('http://localhost:8080/api/bookings', data)
//       .then((resp) => {
//         Swal.fire({ title: resp.data })
//         navigate('/')
//       })
//       .catch((error) => {
//         Swal.fire({ title: error.response.data })
//       })
//   }

//   return (
//     <>
//       <h5 style={{fontWeight: 'bold'}}>Payment Details</h5>
//       <form>
//         <div>
//           <div className='mb-3 row'>
//             <label className='col-sm-4 col-form-label'>Card No</label>
//             <div className='col-sm-8'>
//               <input
//                 type='text'
//                 onChange={(e) => setcardno(e.target.value)}
//                 maxLength={16}
//                 minLength={16}
//                 className='form-control'
//               />
//             </div>
//           </div>
//           <div className='mb-3 row'>
//             <label className='col-sm-4 col-form-label'>Name on Card</label>
//             <div className='col-sm-8'>
//               <input
//                 type='text'
//                 onChange={(e) => setnameoncard(e.target.value)}
//                 className='form-control'
//               />
//             </div>
//           </div>
//           <div className='mb-3 row'>
//             <label className='col-sm-4 col-form-label'>Rent</label>
//             <div className='col-sm-8'>
//               <input
//                 type='number'
//                 value={item?.id?.rent}
//                 disabled
//                 className='form-control'
//               />
//             </div>
//           </div>
//           <div className='mb-3 row'>
//             <label className='col-sm-4 col-form-label'>Electricity Bill</label>
//             <div className='col-sm-8'>
//               <input
//                 type='number'
//                 value={item?.id?.lightbill}
//                 disabled
//                 className='form-control'
//               />
//             </div>
//           </div>
//           <div className='mb-3 row'>
//             <label className='col-sm-4 col-form-label'>Booking Amount</label>
//             <div className='col-sm-8'>
//               <input
//                 type='number'
//                 onChange={(e) => setamount(e.target.value)}
//                 className='form-control'
//               />
//             </div>
//           </div>
//           <button onClick={handleSubmit} className='btn btn-primary float-end'>
//             Pay Now
//           </button>
//         </div>
//       </form>
//     </>
//   )
// }


import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import './3.css'
import { useFormik } from 'formik'
import { PaymentYuup } from '../schemas/PaymentYup'

const initialValues = {

  cardno: "",
  nameoncard: "",
  amount: ""
}

export default function PaymentForm(item, totalbeds) {



  const navigate = useNavigate()
  const BedAvailability = (item?.totalbeds - item?.id?.bookings) > 0 ? true : false;

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({

    initialValues: initialValues,
    validationSchema: PaymentYuup,
    onSubmit: async (value) => {
      if (value.amount > item?.id?.rent + item?.id?.lightbill) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Amount must be less than the total',
        })
        return
      }
      const data = {
        apid: item?.id?.id,
        userid: sessionStorage.getItem('id'),
        cardno: value.cardno,
        nameoncard: value.nameoncard,
        amount: value.amount,
      }

      axios
        .post('http://localhost:8080/api/bookings', data)
        .then((resp) => {
          Swal.fire({ title: resp.data })
          navigate('/')
        })
        .catch((error) => {
          Swal.fire({ title: error.response.data })
        })

    }
  })
  console.log(errors)
  return (
    <div>
      {BedAvailability ? (
        <>
          <h5>Payment Details</h5>
          <form>
            <div>

              <div className='mb-3 row'>
                <label className='col-sm-4 col-form-label'>Card No
                </label>
                <div className='col-sm-8'>
                  {errors.cardno && touched.cardno ? (<span className="errors">{errors.cardno}
                  </span>) : null}

                  <input
                    type='number'

                    name="cardno"
                    value={values.cardno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='form-control'
                  />
                </div>
              </div>
              <div className='mb-3 row'>
                <label className='col-sm-4 col-form-label'>Name on Card



                </label>
                <div className='col-sm-8'>
                  {errors.nameoncard && touched.nameoncard ? (<span className="errors">{errors.nameoncard}
                  </span>) : null}
                  <input
                    type='text'
                    name="nameoncard"
                    value={values.nameoncard}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='form-control'
                  />
                </div>
              </div>
              <div className='mb-3 row'>
                <label className='col-sm-4 col-form-label'>Rent</label>
                <div className='col-sm-8'>
                  <input
                    type='number'
                    value={item?.id?.rent}
                    disabled
                    className='form-control'
                  />
                </div>
              </div>
              <div className='mb-3 row'>
                <label className='col-sm-4 col-form-label'>Electricity Bill</label>
                <div className='col-sm-8'>
                  <input
                    type='number'
                    value={item?.id?.lightbill}
                    disabled
                    className='form-control'
                  />
                </div>
              </div>
              <div className='mb-3 row'>
                <label className='col-sm-4 col-form-label'>Booking Amount

                </label>
                <div className='col-sm-8'>
                
                
                  {errors.amount && touched.amount ? (<span className="errors">{errors.amount}
                  </span>) : null}

                  <input
                    type='number'
                    name="amount"
                    value={item?.id?.rent+item?.id?.lightbill}
                    // disabled
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='form-control'
                  />
                </div>
              </div>{

                <button onClick={handleSubmit} className='btn btn-primary float-end'>
                  Pay Now
                </button>}
            </div>
          </form>
        </>) :


        (<>
          <>
            <h5></h5>
            <form>
              <div>
                <div className='mb-3 row'>
                  <label className='col-sm-4 col-form-label'></label>
                  <div className='col-sm-8'>

                  </div>
                </div>
                <div className='mb-3 row'>
                  <label className='col-sm-4 col-form-label'></label>
                  <div className='col-sm-8'>

                  </div>
                </div>
                <div className='mb-3 row'>
                  <label className='col-sm-4 col-form-label'></label>
                  <div className='col-sm-8'>

                  </div>
                </div>
                <div className='mb-3 row'>
                  <label className='col-sm-4 col-form-label'></label>
                  <div className='col-sm-8'>
                    <div className='form-control'>
                      <h3 className='Apartment'> Apartment is Full</h3>
                    </div>
                  </div>
                </div>
                <div className='mb-3 row'>
                  <label className='col-sm-4 col-form-label'></label>
                  <div className='col-sm-8'>

                  </div>
                </div>


              </div>
            </form>
          </>

        </>)

      }
    </div>
  )
}