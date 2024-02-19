import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Card() {
  const [data, setData] = useState([])
  const state = useSelector((state) => state);
  useEffect(() => {
    axios.get('http://localhost:8080/api/apartments')
      .then(resp => {
        setData(resp.data)
      })
  }, [])
 console.log(data);
  return (
<div className='carddiv'style={{backgroundColor:'#a7dde3'}}>
    <div className='mt-2 mx-auto' style={{ width: "85%"}}>
      <div className='row'>
        {data.map(x => (
          // <div className='col-sm-4'>
          // <div className="card  border-5 shadow mb-2 bg-white rounded" key={x.id}>

          //       <img src={'http://localhost:8080/'+x.photo1} style={{height:"250px"}} className="img-fluid rounded-start" alt="..."/>
          //           <div className="card-body">
          //           <div className='card-header text-center fw-bold'>
          //           <h5 className="card-title fw-bold">{x.name}</h5>
          //           {x.address}, {x.city} {x.district} India
          //       </div>
          //         <p className="card-text font-weight-bold">
          //           <div className='float-start'>Type <span className='fw-bold'>{x.flattype}</span></div> 

          //           {/* <div className='float-end fw-bold'>For {x.gender} only</div>  */}
          //           <div className='clearfix'></div>
          //           <div className='fw-bold'>{x.furnishtype}</div>
          //         </p>
          //         <p className="card-text">
          //           Facility: {x.extra}
          //           <br/>Rent ₹ {x.rent}+₹ {x.lightbill}(Electricity) (Negotiable)
          //         </p>
          //         {/* { <p>Owner Details: <span  className='fw-bold text-success'>{x.owner.name} (Ph: {x.owner.phone})</span></p> } */}
          //         <p className="card-text">
          //             {state.loggedin.IsLoggedIn && state.loggedin.Role==='Customer' ? (
          //         <Link className="btn btn-warning" to={'/apdetails/'+x.id}>Details</Link>
          //         ):""}
          //         </p>
          //       </div>
          //       </div>
          //       </div>

          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{marginTop:'20px'}}>
            <div className="card  border-5 shadow mb-2 bg-white rounded"  key={x.id}>
              <div className='card-header text-center fw-bold' style={{backgroundColor:'white'}}>
                <h4 class="card-header bg-transparent border-success card-title fw-bold">{x.name}</h4>

                <div class="property-item rounded overflow-hidden">
                  <div class="bg-dark rounded text-white position-absolute start-0  top-0 m-2 py-0 px-2">For {x.propertyFor}</div>
                  <div class="position-relative overflow-hidden">

                    <img src={'http://localhost:8080/' + x.photo1} style={{ height: "250px" }} className="img-fluid rounded-start" alt="..." />

                    <div class="bg-white rounded-top  position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{x.biuldingIs}</div>
                  </div>
                  <div class="p-4 pb-0">
                    <h5 class="mb-4"> ₹ {x.rent}</h5>
                    <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{x.address}, {x.city}</p>
                  </div>
                  <div class="d-flex border-top">
                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>{x.builtupArea} Sqft</small>
                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>{x.flattype}</small>

                  </div>
                  <p className="card-text">
                    {state.loggedin.IsLoggedIn && state.loggedin.Role === 'Customer'? (
                      <Link className="btn btn-secondary" to={'/apdetails/' + x.id} >Details</Link>
                    ) : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

