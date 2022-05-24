import axios from 'axios'
import { useState, useEffect } from 'react'
import Search from '../components/Search'


const SearchProducts = () => {

    
    
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        const API_URL = 'http://localhost:3001/api/products'
        axios
            .get(API_URL)
            .then(res => {
                const products = res.data
                setProducts(products)
            })
    }, [])


    const filteredProducts = search.length === 0 ? products : 
    products.filter(product => product.brand.
                toLowerCase().includes(search.toLowerCase()))




    return (
        <div>
            <h3 className='title'>Search Products</h3>
                <input
                    type='text'
                    placeholder='Search Products'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
            <Search products={filteredProducts}/>
        </div>

    )

}
export default SearchProducts