import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import UpdateOrder from '../components/UpdateOrder'
// import CreateProduct from '../components/CreateProduct'
// import DeleteProduct from '../components/DeleteProduct'


const Orders = () => {

    const BASE_URL = 'http://localhost:3001'

    const [orders, getOrders] = useState()
    const [loading, setLoading] = useState(true)

    const allOrders = async () => {
        let res = await axios.get(`${BASE_URL}/api/orders`)
        getOrders(res.data)
    } 

    useEffect(() => {
        allOrders()

    },[])

    useEffect(() => {
        setLoading(false)
    },[orders])


    if (orders) {
        return (
            <div className='Orders'>
                <div>
                    <h2> Orders</h2>
                </div>
    
                {orders.map((orders) => ( 
                    <div key={orders.id}>
                        <h1>{orders.brand}</h1>
                        <h2>Current Order Amount: {orders.quantity}</h2>
                        <img src={orders.image} alt='whiskey' style={{maxWidth: '100%'}}/> 
                        {/* <UpdateOrder updateOrder={orders._id}/> */}
                        {/* <DeleteProduct id={orders.id}/> */}
                        
                        
                     
                    </div>
    
                )
                )}
                {/* <CreateProduct createProduct={orders._id}/> */}
                
    
               
                
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
export default Orders















































// this is where the vendor can see what the owner needs
// both vendor and owner can see this page 
// have the ability for onwer to delete
// when vendor logs in is directed to this page