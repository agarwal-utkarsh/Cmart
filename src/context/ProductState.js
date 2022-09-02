import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { addProduct, deleteProduct, editProduct, getProducts } from '../components/API';
import Loading from '../components/Loading';
import ProductContext from './product-context';

const ProductState = (props) => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [image, setImage] = useState('');
    const [productDetails, setProductDetails] = useState([]);
    const [errMsg,setErrMsg]=useState('')
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        getProducts()
            .then(response => {
                setErrMsg('')
                setProductDetails(response.data);
            })
            .catch(error=>{
                console.log(error.response.status);
                setErrMsg(`Error-${error.response.status}`)
            })
    }, [])
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
        setLoading(true)
        deleteProduct(value)
            .then(response => {
                setLoading(false);
                console.log(response.data);
                setProductDetails(productDetails.filter(ele => ele.id !== value));
            })
            .catch(error=>{
                setLoading(false);
                setErrMsg(`Error-${error.response.status}`)

            })
    }

    const editHandler = (id, updatedProduct) => {
        setLoading(true)
        editProduct(updatedProduct, id)
            .then(response => {
                console.log(response);
                setLoading(false);
                setProductDetails(productDetails.map((ele) => {
                    return (
                        ele.id === id ? updatedProduct : ele
                    )
                }))
            })
            .catch(error=>{
                setErrMsg(error.response.status);
                setLoading(false);
            })
        setProductName('');
        setCategory('');
        setProductPrice(0);
        setImage('');
    }

    const detailsHandler = () => {
        const data = {
            //property names can be set according to the api
            // id: Math.random().toString(),
            title: productName,
            price: productPrice,
            category: category,
            image: image
        }
        setLoading(true);
        addProduct(data)
            .then(response => {
                console.log(response.data);
                setErrMsg('');
                setLoading(false);
                setProductDetails(prevState => {
                    return [
                        ...prevState, response.data
                    ]
                })
            })
            .catch(error=>{
                console.log(error.response)
                setErrMsg(`Error-${error.response.status}`)
                setLoading(false);
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
            <Typography variant='h2' >{errMsg}</Typography>
            {loading && <Loading />}
            {props.children}

            
        </ProductContext.Provider>
    )
}

export default ProductState