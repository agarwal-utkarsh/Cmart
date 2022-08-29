import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import ProductContext from '../context/product-context';
import AdminNavbar from './AdminNavbar';


const Product = () => {
  const productContext = useContext(ProductContext);
  
  const nameChangeHandler = (e) => {
    productContext.nameHandler(e.target.value)
  }

  const priceChangeHandler = (e) => {
   
    productContext.priceHandler(e.target.value)
  }

  const categoryChangeHandler = (e) => {
    productContext.categoryHandler(e.target.value);
  }

  const imageChangeHandler=(e)=>{
    productContext.imageHandler(e.target.value);
    
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(productContext.productPrice<=0){
      alert("Price should be greater than 0");
      return;
    }
    console.log(productContext.productName)
    console.log(productContext.productPrice)
    console.log(productContext.category)
    console.log(productContext.image);
    productContext.detailsHandler();
  }

  return (
    <div style={{ textAlign: "center" ,justifyContent:"center",
    alignItems:"center",}}>
      <AdminNavbar />
      <Box sx={{
        width: 600,
        height: 400,
        // backgroundColor: '#ccc',
        
        margin: "0 auto",

      }}>
        <Typography variant="h4" mt={5}>Product Details</Typography>
        <form onSubmit={submitHandler} style={{
          marginTop: "5px",

        }}>
          <div style={{
            marginTop:"5%",
            alignItems:"center",
             display: "flex",
            flexDirection: "column"
          }}>
            <TextField required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" onChange={nameChangeHandler} label="Product Name" value={productContext.productName} />

            <TextField sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" onChange={priceChangeHandler} type="number" label="Price" value={productContext.productPrice} />

            <TextField required label="Category" sx={{ marginBottom: "8px", width: "50%" }} select onChange={categoryChangeHandler} value={productContext.category}>

              <MenuItem value="electronics" >Electronics</MenuItem>
              <MenuItem value="medicines" >Medicines</MenuItem>
              <MenuItem value="grocery" >Grocery</MenuItem>

            </TextField>
            <TextField variant='outlined' sx={{ marginBottom: "8px", width: "50%" }} type="url" onChange={imageChangeHandler} label="Image Link" value={productContext.image}></TextField>
          </div>


          <Button type="submit" variant="outlined" sx={{ color: "purple" }} >Submit</Button>

        </form>
      </Box>
    </div>
  )
}

export default Product;