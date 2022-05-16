import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const UpdateProduct = (props) => {

    const navigate = useNavigate()
    

    const BASE_URL = 'http://localhost:3001/api'

    const [update, setUpdate] = useState(false)
    const [brand, setBrand] = useState('')
    const [image, setImage] = useState('')
      

    const UpdateProduct = async (e) => {
        e.preventDefault()
        await axios.put(`${BASE_URL}/products/${props.id}`, { 
            brand: brand,
            image: image

          
        })
        window.location.reload(true)
    }

        
    
    

    return (
        <div className='updateProduct'>
            {update ? 
                <form onSubmit={(e) => UpdateProduct(e)}>
                    <input onChange={(e) => setBrand(e.target.value)} type='text' id={'brand'} name={'brand'} placeholder='brand'/>

                    <input onChange={(e) => setImage(e.target.value)} type='text' id={'image'} name={'image'} placeholder='image'/>

                    <button className='update-button'>update</button>

                </form>:
                <button className='updateButton' onClick={() => setUpdate(true)}>Update</button>
            }

        </div>

    )
}
export default UpdateProduct


