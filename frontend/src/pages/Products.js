// import '../assets'
import React, { useState, useEffect } from 'react'
// import Client from '../services/api'
import axios from 'axios'
import Orders from './Orders'
import DeleteProduct from '../components/DeleteProduct'
import CreateProduct from '../components/CreateProduct'
import UpdateProduct from '../components/UpdateProduct'


const Products = () => {

    const BASE_URL = 'http://localhost:3001'
     
    const [products, getProducts] = useState()
    const [loading, setLoading] = useState(true)
    
    

   



    const allProducts = async () => {
        let res = await axios.get(`${BASE_URL}/api/products`)
        getProducts(res.data)
        // console.log(res.data)
        
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
                <h2>Inventory</h2>
            </div>

            {products.map((product) => ( 
                <div key={product.id}>
                    <h1>{product.brand}</h1>
                    <h2></h2>
                    <img className='images' src={product.image} alt='liquor' style={{maxWidth: '100%'}}/>
                    <UpdateProduct id={product.id}/>
                    <DeleteProduct id={product.id}/> 
                  
                    
                </div>

            )
            )}
             <CreateProduct createProduct={products.brand}/>

           
            
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