import React from 'react'
import { Link } from 'react-router-dom'



const navbar = () => {

    return(
        <nav className='nav>'>
            <div>
                <Link to='/orders' className='navOrders'>Orders</Link>
                
                <Link to='/products' className='navProducts'>Inventory</Link>

                
            </div>
            
        </nav>
    

)
}
export default navbar