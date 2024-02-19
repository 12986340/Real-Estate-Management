import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"
//import { userDetails } from "./UserDetails"



export default function SendMail() {
    const { id } = useParams()
    //const [subject, setsubject] = useState(null)
    //const [message, setmessage] = useState(null)
    const [datas, setDatas] = useState([])
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckbox=()=>{
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        axios.get('http://localhost:8080/api/apartments/' + id)
            .then(resp => {
                setDatas(resp.data)
            })
    }, [id])

    console.log(datas.rent)
    const handleSubmit = e => {
        e.preventDefault()
        if(!isChecked)
        {
            Swal.fire({title:'Please check  terms and  condition '})
           return;
        }

        const data = {
            "userid": +sessionStorage.getItem("id"),
            "message": "Hello , Here are the Owner details of Property " + datas.flattype +
                    " in "+datas.address +
                    " Name :"+datas.name+
                    " phone :"+datas.owner.phone +          
                    " Email :"+datas.owner.userid+
                    " Thank you",
            "subject": "PROPERTY_PULSE"
        }
        /*change */
        // const[csub,sub]=useState([]);
        axios.post('http://localhost:8080/api/admin/sendmail', data)
            .then(resp => {
                Swal.fire({ title: resp.data })
                //  sub({title:resp.data})

            })
            .catch(error => {
                Swal.fire({ title: error.response.data })
            })

    }
    return(
        <>
        <div className="container mt-5">
            <h5>Send Mail Confirmation</h5>
            <div className="row">
                <div className="col-sm-5 mx-auto">
            <form>
                  <div>
                    <label>
                        <textarea rows="3" cols='70'
                        readOnly={true}
                        value={"By accessing and using our website/service, you agree to comply with our terms and conditions, which govern your use and interaction with the content and features provided."}
                        style={{padding:'10px'}}
                        /><br/>
                        <input type="checkbox" checked={isChecked} onChange={handleCheckbox}/>
                        I Accepts all terms and Condition
                    </label>
                                
                    <button onClick={handleSubmit} className="btn btn-success float-end">Send Details</button>
                </div>
            </form>
                </div>
            </div>
        </div>

        </>
    )


    
}