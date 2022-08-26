import React, { useState } from 'react'
import ProductContext from './product-context';

const ProductState = (props) => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productDetails, setProductDetails] = useState([])

    const nameHandler = (value) => {
        setProductName(value);
    }

    const categoryHandler = (value) => {
        setCategory(value)
    }

    const priceHandler = (value) => {
        setProductPrice(value)
    }

    const detailsHandler=()=>{
        const data={
            id:Math.random().toString(),
            productName:productName,
            productPrice:productPrice,
            category:category
        }
        setProductDetails((prevState => {
            return [
                ...prevState, data
            ]
        }))
        setProductName('');
        setCategory('');
        setProductPrice(0);


    }

    return (
        <ProductContext.Provider value={{
            productName: productName,
            category: category,
            productPrice: productPrice,
            productDetails: productDetails,
            nameHandler: nameHandler,
            categoryHandler: categoryHandler,
            priceHandler: priceHandler,
            detailsHandler:detailsHandler
        }} >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState