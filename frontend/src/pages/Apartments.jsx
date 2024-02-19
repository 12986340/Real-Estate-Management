import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

export default function Apartments(){
    const [data,setData]=useState([])
    const state=useSelector((state)=>state);
    const role=state.loggedin.Role
    console.log(role)
    const navigate=useNavigate()
    const deleteApartment=id=>{
        axios.delete('http://localhost:8080/api/apartments/'+id)
        .then(resp=>{
            Swal.fire({title:resp.data})
            navigate('/apartments')
        })
        .catch(error=>{
            Swal.fire({title:'Apartment already in use'})
        })
    }
    useEffect(()=>{
        if(role=="Admin"){
        axios.get('http://localhost:8080/api/apartments')
        .then(resp=>{
            setData(resp.data)
        })  
        }else{
        axios.get('http://localhost:8080/api/apartments/owners/'+sessionStorage.getItem("id"))
        .then(resp=>{
            setData(resp.data)
        })
    }
    console.log(data);
    },[])
    return(
        <>
        <div className="container mt-5">
            {role==='Owner'?(
            <Link to="/addnew" className="btn btn-primary btn-sm float-end">Add Apartment</Link>
            ):""}
            <h5 className="p-2">Apartment List</h5>
            <table className="table table-bordered  table-striped" style={{border:'2px solid black',textAlign:'center'}}>
            <thead className="table-success" style={{border:'2px solid black'}}>
                <th>Id</th>
                <th>Name</th>
                <th>Owner Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Rental</th>                
                <th>Action</th>
            </thead>
            <tbody>
            {data.map(x=>(
                <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.owner.name}</td>
                    <td>{x.address}</td>
                    <td>{x.city}</td>
                    <td>{x.state}</td>
                    <td>Rs. {x.rent}</td>
                    <td>
                    {role==='Admin'?(
                         <button onClick={e=>deleteApartment(x.id)} className="btn btn-outline-danger btn-sm float-end">Delete Apartment</button>
                    
                          ):(
                        <Link to={'/apartmentdetails/'+x.id} className="btn btn-primary btn-sm">Details</Link>
                        )}
                    </td>
                </tr>
            ))}

            </tbody>
            </table>
        </div>
        </>
    )
}