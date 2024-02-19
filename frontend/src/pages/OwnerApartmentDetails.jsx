import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import './ApartmentDetails.css'
import ApartmentDetails from "./ApartmentDetails"
export default function OwnerApartmentDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [users, setusers] = useState([])

    const deleteApartment = id => {
        axios.delete('http://localhost:8080/api/apartments/' + id)
            .then(resp => {
                Swal.fire({ title: resp.data })
                navigate('/apartments')
            })
    }
    const activateApartment = id => {
        axios.put('http://localhost:8080/api/apartments/' + id)
            .then(resp => {
                Swal.fire({ title: resp.data })
                navigate('/apartments')
            })
    }
    const handleCancel = id => {
        axios.get('http://localhost:8080/api/bookings/cancel/' + id)
            .then(resp => {
                Swal.fire({ title: resp.data })
                navigate('/apartments')
            })
    }
    useEffect(() => {
        axios.get('http://localhost:8080/api/apartments/' + id)
            .then(resp => {
                setData(resp.data)
            })
    }, [id])
    useEffect(() => {
        axios.get('http://localhost:8080/api/bookings/apartments/' + data?.id)
            .then(resp => {
                setusers(resp.data)
            })
    }, [data])
    return (
        <>
                    <ApartmentDetails/>
                    <div className="d-grid gap-2 col-4 mx-auto" style={{paddingBottom:'20px'}}>
                        {data?.isactive ? (
                            <button onClick={e => deleteApartment(data?.id)} className="btn btn-outline-danger btn-sm float-end">Deactivate  {data?.buildingIs}</button>
                        ) : (
                            <button onClick={e => activateApartment(data?.id)} className="btn btn-success btn-sm float-end">Activate  {data?.buildingIs}</button>
                        )}                     
                    </div>

        </>
    )
}