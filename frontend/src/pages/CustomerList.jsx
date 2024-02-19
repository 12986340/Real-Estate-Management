import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function CustomersList(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/customers')
        .then(resp=>{
            setData(resp.data)
        })
    },[])
    return(
        <>
        <div className="container mt-5">
            <h5 className="p-2">Buyers List</h5>
            <table className="table table-bordered table-striped" style={{border:'2px solid black',textAlign:'center'}}>
            <thead className="table-success" style={{border:'2px solid black'}}>
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>User Id</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
            </thead>
            <tbody>
            {data.map(x=>(
                <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.gender}</td>
                    <td>{x.userid}</td>
                    <td>{x.address}</td>
                    <td>{x.phone}</td>
                    <td>{x.active?'Active':'Inactive'}</td>
                    <td>
                        <Link to={'/udetails/'+x.id} className="btn btn-primary btn-sm">Details</Link>
                    </td>
                </tr>
            ))}

            </tbody>
            </table>
        </div>
        </>
    )
}