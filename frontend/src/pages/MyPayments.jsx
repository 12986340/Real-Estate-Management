import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function MyPayments(){
    const [data,setData]=useState([])
    const navigate=useNavigate()    
    useEffect(()=>{
        axios.get('http://localhost:8080/api/bookings/payments/'+sessionStorage.getItem("id"))
        .then(resp=>{
            setData(resp.data)
        })
    },[])
    return(
        <>
        <div className="container mt-5">
            <h5 className="p-2">Payment List</h5>
            <table className="table table-bordered table-striped" style={{border:'2px solid black'}}>
            <thead className="table-success" style={{border:'2px solid black'}}>
                <th>Id</th>
                <th>Payment Date</th>
                <th>Customer Name</th>
                <th>Card No</th>
                <th>Name on Card</th>
                <th>Amount</th>
                <th>Remarks</th>               
            </thead>
            <tbody>
            {data.map(x=>(
                <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.pmtdate}</td>
                    <td>{x.customer.name}</td>
                    <td>{x.cardno}</td>
                    <td>{x.nameoncard}</td>
                    <td>{x.amount}</td>                    
                    <td>{x.remarks}</td>
                </tr>
            ))}

            </tbody>
            </table>
        </div>
        </>
    )
}