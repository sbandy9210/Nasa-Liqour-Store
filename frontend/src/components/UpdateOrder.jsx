import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function UpdateOrder({updateOrder}) {

    const navigate = useNavigate()

    const BASE_URL = 'http://localhost:3001/api'

    const [update, setUpdate] = useState(false)
    const [quantity, setQuantity] = useState('')
    

    const newOrder = async (e) => {
        e.preventDefault()
        await axios.put(`${BASE_URL}/updateOrder/${updateOrder}`,{
            quantity: quantity
        })
        window.location.reload(true)
    }


    return (
        <div className='updateOrder'>
            {update ? 
                <form onSubmit={(e) => newOrder(e)}>
                    <input onChange={(e) => setQuantity(e.target.value)} type='integer' id={'quantity'} name={'quantity'} placeholder={'quantity'}/>

                    <button className='update-button' onClick={() => navigate(`/products`)}>submit</button>

                </form>:
                <button className='updateButton' onClick={() => setUpdate(true)}>Update</button>
            }

        </div>

    )
}
export default UpdateOrder