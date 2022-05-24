import React from 'react'

const Search = ({products}) => {
    return (
        <div>
            <ul>
            {products.map(product => (
                <ul key={product.id}>
                    {product.brand}
                    <br/>
                    <img className='images' src={product.image} alt='liquor' style={{maxWidth: '100%'}}/>
                </ul>   
            ))}
            </ul>
        </div>
    )

}
export default Search