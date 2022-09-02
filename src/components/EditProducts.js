import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import ProductContext from '../context/product-context';
import AdminNavbar from './AdminNavbar';


const EditProduct = (props) => {
    const productContext = useContext(ProductContext);
    // console.log(props.item.id);
    const id = props.item.id;
    //props. itemProperty can be changed according to the api and database
    // const [editProductName, setEditProductName] = useState(props.item.productName);
    const [editProductName, setEditProductName] = useState(props.item.title);
    const [editProductPrice, setEditProductPrice] = useState(props.item.price);
    const [editProductCategory, setEditProductCategory] = useState(props.item.category);
    const [editProductImage, setEditProductImage] = useState(props.item.image);
    



    const nameChangeHandler = (e) => {
        setEditProductName(e.target.value);
        productContext.nameHandler(e.target.value)
    }

    const priceChangeHandler = (e) => {
        setEditProductPrice(e.target.value);
        productContext.priceHandler(e.target.value)
    }

    const categoryChangeHandler = (e) => {
        setEditProductCategory(e.target.value);
        productContext.categoryHandler(e.target.value);
    }

    const imageChangeHandler = (e) => {
        setEditProductImage(e.target.value);
        productContext.imageHandler(e.target.value);

    }

    const editHandler = (e) => {
        e.preventDefault();
        if (editProductPrice <= 0) {
            alert("Price should be greater than 0");
            return;
        }
        {/* item.name according to the data base api */ }
        const updatedProduct = {
            id: id,
            title: editProductName,
            price: editProductPrice,
            category: editProductCategory,
            image: editProductImage,
        }
        productContext.editHandler(id, updatedProduct);
        
    }

    return (
        <div style={{
            textAlign: "center", justifyContent: "center",
            alignItems: "center",
        }}>

            <Box sx={{
                width: 600,
                height: 400,
                // backgroundColor: '#ccc',

                margin: "0 auto",

            }}>
                <Typography variant="h4" mt={5}>Edit Product Details</Typography>
                <form onSubmit={editHandler} style={{
                    marginTop: "5px",

                }}>
                    <div style={{
                        marginTop: "5%",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <TextField required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" onChange={nameChangeHandler} label="Product Name" value={editProductName} />

                        <TextField sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" onChange={priceChangeHandler} type="number" label="Price" value={editProductPrice} />

                        <TextField required label="Category" sx={{ marginBottom: "8px", width: "50%" }} select onChange={categoryChangeHandler} value={editProductCategory}>

                            <MenuItem value="electronics" >Electronics</MenuItem>
                            <MenuItem value="medicines" >Medicines</MenuItem>
                            <MenuItem value="grocery" >Grocery</MenuItem>

                        </TextField>
                        <TextField variant='outlined' sx={{ marginBottom: "8px", width: "50%" }} type="url" onChange={imageChangeHandler} label="Image Link" value={editProductImage}></TextField>
                    </div>


                    <Button type="submit" variant="outlined" sx={{ color: "purple" }} >Edit</Button>

                </form>
            </Box>
        </div>
    )
}

export default EditProduct;