import axios from "axios"
import { useEffect,useState } from "react"
import { useParams ,useNavigate} from "react-router-dom"
//import PaymentForm from "../components/PaymentForm"
import './ApartmentDetails.css'
import ApartmentDetailsToDisplay from "./ApartmentDetails"
import UserDetails1 from "./UserDetails"

export default function ApartmentDetails() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const navigate=useNavigate()
  const handleSearch=e=>{
    e.preventDefault()
    console.log("OK")

    
    navigate('/sendmail/'+id)
  }
  useEffect(() => {
    axios.get('http://localhost:8080/api/customers/'+id)
      .then(resp => {
        setData(resp.data)
      })
  },[id])
  //  const fun=()=>{
  //   axios.get('http://localhost:8080/api/apartments/')
  //       .then(resp=>{
  //           setData(resp.data)
  //           navigate('/sendmail/'+id)
  //           }
  //           );
  //  }
  return (
    <>
    <ApartmentDetailsToDisplay/>
    <div class="d-grid gap-2 col-6 mx-auto">
                <button onClick={handleSearch} class="btn btn-info" type="button">Get Owner Details</button>
      </div> */
    </>
  
  );
}