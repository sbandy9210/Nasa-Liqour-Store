import axios from 'axios'
import { useState, useEffect } from 'react'


const CreateProduct = () => {

    const BASE_URL = 'http://localhost:3001/api'

    const [form, setForm] = useState({
        brand: '',
        image: ''
    })

    
    const handleForm = async (e) => {
        await setForm({...form, [e.target.name]: e.target.value })
    }

    const handleCreate = async (e) => {
        await axios.post(`${BASE_URL}/products/create`, form)
        e.preventDefault()
    }

    useEffect (() => {

    },[form])

    return (
        <div className='addNewProduct'>
            <h1>Add a new product</h1>
            <form action='/products'>
                <label for='brand'>Brand: </label>
                <br/>
                <input type='text' id='brand' name='brand' value={form.brand} onChange={(event) => handleForm(event)}/>
                
                <label for='image'>Image: </label><br/>
                <input type='text' alt='' id='image' name='image' value={form.image} onChange={(event) => handleForm(event)}/>
                <br/>
                <button onClick={() => handleCreate()}>Submit</button>
            </form>

        </div>
    )


}

export default CreateProduct
