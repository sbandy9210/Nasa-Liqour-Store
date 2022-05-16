import axios from 'axios'
import React, {useState, useEffect } from 'react'


const DeleteProduct = ({id}) => {
    const BASE_URL = 'http://localhost:3001/api'
    console.log(id)

    const [product, setProduct] = useState([])

    const handleDelete = async () => {
        await axios.delete(`${BASE_URL}/products/${id}`)
        window.location.reload()

    }

    useEffect(() => {

    },[])

    return (
        <div>
            <button className='deleteButton' onClick={() => handleDelete()}>
                Delete this product.
            </button>

        </div>
    )
}
export default DeleteProduct