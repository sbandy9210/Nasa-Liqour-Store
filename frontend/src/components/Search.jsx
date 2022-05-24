import React from 'react'

const Search = ({products}) => {
    return (
        <div>
            
            {products.map(product => (
                <div key={product.id}>
                    {product.brand}
                    <br/>
                    <img className='images' src={product.image} alt='liquor' style={{maxWidth: '100%'}}/>
                
                </div>
                 
            ))}
                
        </div>
    )

}
export default Search