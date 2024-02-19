import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"

export default function UserDetails(){
    const [data,setData]=useState()
    const {id}=useParams()
    const loadData=()=>{
        axios.get('http://localhost:8080/api/customers/'+id)
        .then(resp=>{
            setData(resp.data)
        })
    }
    const handleActivate = e=>{
        let status=data?.active?'De-Activate':'Activate'
        Swal.fire({
            title: `Do you want to ${status} this buyer?`,
            showCancelButton: true,
            confirmButtonText: status,
            }).then((result) => {
            if (result.isConfirmed) {
                updateStatus()                
            } 
            })
    }
    const updateStatus=()=>{
        axios.put('http://localhost:8080/api/customers/'+id)
        .then(resp=>{
            loadData()
            Swal.fire({
                title: resp.data
            })            
        })
    }
    useEffect(()=>{
        loadData()
    },[])
    return(        
        <>
            <div className="container mt-5">
           
            <h3>Details of Buyer {data?.name}</h3>
            
            <table className="table" style={{border:'1px solid black',font:''}}>
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>{data?.name}</th>
                        <th rowspan={7} style={{paddingLeft:'10px',border:'1px solid black',textAlign:'center'}}>
                            <img src={'http://localhost:8080/'+data?.uidphoto} style={{width:"500px"}} alt='Adhar Card' /><br/>
                            Adhar Id     
                        </th>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <th>{data?.gender}</th>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <th>{data?.address}</th>
                    </tr>
                    <tr>
                        <th>Phone no</th>
                        <th>{data?.phone}</th>
                    </tr>
                    <tr>
                        <th>Email Id</th>
                        <th>{data?.userid}</th>                        
                    </tr>
                     <tr>
                        <th>Aadhar No</th>
                        <th>{data?.uid}</th>                        
                    </tr>
                    <tr>
                        <th>Buyer Status</th>
                        <th>{data?.active ? 'Active':'Inactive'}</th>
                    </tr>
                </thead>
            </table>
           
            <div className="conatiner">
            {data?.active ? (
                <button className="btn btn-danger float-start" onClick={handleActivate}>De-Activate</button>
            ):(
                <button className="btn btn-success float-end" onClick={handleActivate}>Activate</button>
            )}
            </div>
            </div>
           
        </>
    )
}
