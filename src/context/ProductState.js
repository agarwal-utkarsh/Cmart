import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import ProductContext from './product-context';

const ProductState = (props) => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [image, setImage] = useState('');
    const [productDetails, setProductDetails] = useState([]);   
      
    useEffect(()=>{
        const url="https://fakestoreapi.com/products";
        axios.get(url).then((res)=>{
            
            setProductDetails(res.data);
        })

    },[])
    const nameHandler = (value) => {
        setProductName(value);
    }

    const categoryHandler = (value) => {
        setCategory(value)
    }

    const priceHandler = (value) => {
        setProductPrice(value)
    }

    const imageHandler = (value) => {
        setImage(value);
    }

    const deleteHandler = (value) => {
        setProductDetails(productDetails.filter(ele => ele.id !== value));
    }

    const editHandler = (id,updatedProduct) => {
        // console.log(id);
        
        console.log("Edit Form")
        console.log(updatedProduct);
        setProductDetails(productDetails.map((ele) => {
            return (
                ele.id === id ? updatedProduct : ele
            )
        }))
        setProductName('');
        setCategory('');
        setProductPrice(0);
        setImage('');
    }

    const detailsHandler = () => {
        const data = {
            //property names can be set according to the api
            id: Math.random().toString(),
            title: productName,
            price: productPrice,
            category: category,
            image: image
        }
        setProductDetails((prevState => {
            return [
                ...prevState, data
            ]
        }))
        const url="https://fakestoreapi.com/products";
        axios.post(url,data).then(res=>{
            console.log(res);
        })
        setProductName('');
        setCategory('');
        setProductPrice(0);
        setImage('');


    }

    return (
        <ProductContext.Provider value={{
            productName: productName,
            category: category,
            productPrice: productPrice,
            image: image,
            productDetails: productDetails,
            nameHandler: nameHandler,
            categoryHandler: categoryHandler,
            priceHandler: priceHandler,
            imageHandler: imageHandler,
            detailsHandler: detailsHandler,
            deleteHandler: deleteHandler,
            editHandler: editHandler,
        }} >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState