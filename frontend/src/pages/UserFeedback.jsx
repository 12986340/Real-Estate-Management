import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

export default function UserFeedback(){
    
    const [feedback,setfeedback]=useState()
    const handleSubmit=e=>{
        e.preventDefault()
        if(feedback==null){
            Swal.fire({title:'Please fill the feedback'})
            return;
        }
        const data={        
            "userid":sessionStorage.getItem("id"),
            "descr":feedback,
        }

        axios.post('http://localhost:8080/api/admin/feedbacks',data)
        .then(resp=>{
            Swal.fire({title:'feedback submitted'})
            setfeedback("")
        })
        .catch(error=>{
            Swal.fire({title:'feedback can be submitted after booking'})        
        })
    }
    
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-5 mx-auto">
                <h5>Feedback Form</h5>
            <form>
                  <div>
                    <div className="mb-3">
                        <textarea rows={5} placeholder="Your feedback here"  onChange={e=>setfeedback(e.target.value)} className="form-control"></textarea>
                    </div>                    
                    <button onClick={handleSubmit} className="btn btn-primary float-end">Submit Now</button>
                </div>
            </form>
                </div>
            </div>
        </div>
            
        </>
    )
}