import React from 'react'
import axios from 'axios'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


const UpdateProduct = ({updateProduct}) => {

    // const navigate = useNavigate()

    const BASE_URL = 'http://localhost:3001/api'

    const [update, setUpdate] = useState(false)
    const [quantity, setQuantity] = useState({
        quantity: ''
    })
    
    const handleChange = (event) => {
        setQuantity({...quantity, [event.target.name]: event.target.value})


    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`${BASE_URL}/updateProduct/${updateProduct}`,{
            quantity: quantity
        })
        window.location.reload(true)
    }


    return (
        <div className='updateProduct'>
            {update ? 
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type='integer' id={'quantity'} name={'quantity'} placeholder={'quantity'}/>

                    <button className='update-button'>submit</button>

                </form>:
                <button className='updateButton' onClick={() => setUpdate(true)}>Update</button>
            }

        </div>

    )
}
export default UpdateProduct