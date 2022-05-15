// import '../assets'
import React, { useState, useEffect } from 'react'
// import Client from '../services/api'
import axios from 'axios'



const Products = () => {

    const BASE_URL = 'http://localhost:3001'
     
    const [products, getProducts] = useState()
    const [loading, setLoading] = useState(true)
    

   



    const allProducts = async () => {
        let res = await axios.get(`${BASE_URL}/api/products`)
        getProducts(res.data)
        console.log(res.data)
        
        // setLoading(false)
    }

    useEffect(() => {
        allProducts()
    },[])

   useEffect(() => {
       setLoading(false)
    },[products])

   
   
    if (products) {
    return (
        <div className='Products'>
            <div>
                <h2>Products</h2>
            </div>

            {products.map((products) => ( 
                <div key={products.id}>
                    <h1>{products.brand}</h1>
                    <img src={products.image} alt='whiskey' style={{maxWidth: '100%'}}/> 
                  
                    
                </div>

            )
            )}

           
            
        </div>
    )
    } else {
       return ( 
           <div>
            <p>why isn't my data loading </p> 
           </div>
       )
   }
}

export default Products

















//app.js client api call inported 
// write a function makes axios call 
// this page will display all of the products 
// have full crud only owner has crud abilities
// when owner logs in is redirected to this page