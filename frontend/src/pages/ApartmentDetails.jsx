
import axios from "axios"
import { Carousel } from "react-bootstrap"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
//import PaymentForm from "../components/PaymentForm"
import './ApartmentDetails.css'

export default function ApartmentDetails() {
  const { id } = useParams()
  const [data, setData] = useState(null);
  const [getData,setGetData]=useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/apartments/' + id)
      .then(resp => {
        setData(resp.data)
      })
  },[id])

  return (
    <>
      <div className="container overview">
        <div className="col-12 ">

          <h4 className="header" style={{ color: 'whitesmoke' }}>BUILDING__OVERVIEW</h4>
          <div className="card " style={{ width: '100%', border: '2px solid black', background: '' }}>
            <div className="row">
              <div className="col-7" >
                <Carousel >
                  <Carousel.Item>

                    <img
                      className="d-block w-100"
                      src={'http://localhost:8080/' + data?.photo1} height={450}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={'http://localhost:8080/' + data?.photo2} height={450}
                      alt="Second slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={'http://localhost:8080/' + data?.photo3} height={450}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={'http://localhost:8080/' + data?.photo4} height={450}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>

                </Carousel>
              </div>
              <div className="col-5">
                <h1>{data?.name}</h1>
                <p className="p1">
                  <label>Amount </label> :  <span> ₹ {data?.rent}</span><br />
                  <label>Address </label> :  <span>{data?.address}</span><br />
                  <label>City </label>  :  <span>{data?.city}</span><br />
                  <label>State </label>. :  <span>{data?.state}</span><br />                 
                </p>
              </div>
            </div>
            <div>
              <p><hr/></p>
            </div>
            <div className="row" style={{ textAlign: 'center' }}>
              <div className="col-6" >
                <ul className="list-group list-group-flush" >
                  <li className="list-group-item"><label>Building Type</label>: {data?.biuldingIs}</li><br/>
                  <li className="list-group-item"><label>BHK Type </label>: {data?.flattype}</li><br/>
                  <li className="list-group-item"><label>Property To </label>:  {data?.propertyFor}</li><br/>
                  <li className="list-group-item"><label>Biultup Area </label>: {data?.builtupArea} sqft</li><br/>
                  <li className="list-group-item"><label>Owner Name </label>:{data?.owner.name}</li><br/>
                </ul>  
              </div>
              <div className="col-6">

                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><label>Furnishing Type </label>: {data?.furnishtype}</li><br/>
                  <li className="list-group-item"><label>Parking </label>:  {data?.parking}</li><br/>
                  <li className="list-group-item"><label>{data?.buildingIs} Facing</label>: {data?.facing}</li><br/>
                  <li className="list-group-item"><label> Balcony </label>:{data?.balcony}</li><br/>
                  <li className="list-group-item"><label> Extra </label>:{data?.extra}</li><br/>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="d-grid gap-2 col-6 mx-auto "style={{paddingTop:'10px'}}>
                <button class="btn btn-info" type="button">Contact</button>
      </div> */}
      </div>

    </>
  );
}



