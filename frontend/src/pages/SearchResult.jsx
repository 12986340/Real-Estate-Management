import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Searchbar from '../components/Searchbar';

export default function SearchResult() {
  const [data, setData] = useState([])
  const location = useLocation()
  console.log(location)
  console.log("Values", location.state)
  // const city=location.state?.city==null?"All":location.state.city
  // const furnish=location.state?.furnish==null?"All":location.state.furnish
  // const atype=location.state?.atype==null?"All":location.state.atype
  const city = location.state.city || 'All'
  const furnish = location.state.furnish || 'All'
  const atype = location.state.atype || 'All'
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log("searching,..")
    axios.get('http://localhost:8080/api/apartments/search?city='+city+'&furnish='+furnish+'&atype='+atype)
      .then(resp => {
        setData(resp.data)
      })
  }, [location.state])

  // useEffect(() => {
  //   console.log("searching,..")
  //   axios.get('http://localhost:8080/api/apartments')
  //     .then(resp => {
  //       setData(resp.data)
  //     })
  // }, [])

  return (
     <>
    <div className='container mt-2 mx-auto' style={{ width: "90%",paddingTop:'60px'}}>
      <div className='row'>
      <span style={{position:'sticky', top:'15px',zIndex:'1'}}><Searchbar/></span> 
      {data.length>0 ? data.map(x=>(

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-dalay="0.1s">
      <div className="card  border-2 shadow mb-2 bg-white rounded" key={x.id}>
            <div className='card-header text-center fw-bold'>
                <h4 className="card-header bg-transparent border-success card-title fw-blod">{x.name}</h4>
            </div>

            <div className="property-item rounded overflow-hidden">
            <div class="bg-dark rounded text-white position-absolute start-0  top-0 m-2 py-0 px-2">For {x.propertyFor}</div>
            <div class="position-relative overflow-hidden">

            <img src={'http://localhost:8080/'+x.photo1} style={{height:"300px"}} className="img-fluid rounded-start" alt="..."/>

              <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{x.buildingIs}</div>
                  </div>
                  <div class="p-4 pb-0" style={{textAlign:'center'}}>
                    <h5 class="text-primary mb-3"> ₹ {x.rent}</h5>
                    <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{x.address}, {x.city}</p>
                  </div>

                  <div class="d-flex border-top">
                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>{x.builtupArea} Sqft</small>
                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>{x.flattype}</small>

                  </div>

                  <p className="card-text" style={{textAlign:'center'}}>
                    {state.loggedin.IsLoggedIn && state.loggedin.Role === 'Customer' ? (
                      <Link className="btn btn-warning" to={'/apdetails/' + x.id}>Details</Link>
                    ) : ""}
                  </p>
            </div>
            </div>
            </div>
      )): (<>
      <h5 className='p-2 container'>No records found..</h5>
      </>)}
      </div>

    </div> 
    </>
   );
}


