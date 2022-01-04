import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {setProducts} from '../features/actions/productsActions'

const ProductListing = () => {
    const dispatch = useDispatch()

    const fetchProduct = async () => {
        const url = 'https://fakestoreapi.com/products'
        const response = await axios(url).catch(err => console.log(err))
        dispatch(setProducts(response.data))
    }

    useEffect(()=> {
        fetchProduct()
    })

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing
