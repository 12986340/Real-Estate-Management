import axios from "axios"
import { useEffect, useState } from "react"
import './table.css'

export default function UserProfile(){
    const [data,setData]=useState()
    useEffect(()=>{
        axios.get('http://localhost:8080/api/customers/'+sessionStorage.getItem("id"))
        .then(resp=>{
            setData(resp.data)
        })
    },[])
    return(        
        <>
            <div className="container mt-5">            
            <h3>User Profile </h3>
            <table className="table "style={{border:'1px solid black'}}>
                <thead >
                    <tr>
                        <th>User name</th>
                        <th>{data?.name}</th>
                        <th rowspan={7} style={{paddingLeft:'10px',border:'1px solid black',textAlign:'center'}}>
                            <img src={'http://localhost:8080/'+data?.uidphoto} style={{width:"400px"}} alt='Adhar Card' /><br/>
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
                        <th>User Status</th>
                        <th>{data?.active ? 'Active':'Inactive'}</th>
                    </tr>
                </thead>
            </table>
            </div>
        </>
    )
}
