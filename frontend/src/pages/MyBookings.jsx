import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function MyBookings(){
    const [data,setData]=useState([])
    const navigate=useNavigate()
    const handleCancel=id=>{
        axios.get('http://localhost:8080/api/bookings/cancel/'+id)
        .then(resp=>{
            Swal.fire({title:resp.data})
            navigate('/apartments')
        })
    }
    useEffect(()=>{
        axios.get('http://localhost:8080/api/bookings/history/'+sessionStorage.getItem("id"))
        .then(resp=>{
            setData(resp.data)
        })
    },[])
    return(
        <>
        <div className="container mt-5">
            <h5 className="p-2">My Booking History</h5>
            <table className="table table-bordered table-striped" style={{border:'2px solid black'}}>
            <thead className="table-success" style={{border:'2px solid black'}}>
                <th>Id</th>
                <th>Booking Date</th>
                <th>Apartment Name</th>
                <th>Owner Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Rental</th> 
                <th>Status</th>               
                <th>Action</th>
            </thead>
            <tbody>
            {data.map(x=>(
                <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.bookdate}</td>
                    <td>{x.apartment.name}</td>
                    <td>{x.apartment.owner.name}</td>
                    <td>{x.apartment.address}</td>
                    <td>{x.apartment.city}</td>
                    <td>{x.apartment.rent}</td>
                    <td>{x.status}</td>
                    <td>{x.status==='Booked' ? (
                        <button onClick={e=>handleCancel(x.id)} className="btn btn-danger btn-sm">Cancel Booking</button>
                        ):"Booked"}
                    </td>
                </tr>
            ))}

            </tbody>
            </table>
        </div>
        </>
    )
}