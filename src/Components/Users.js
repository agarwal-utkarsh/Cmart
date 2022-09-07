import * as React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, CardActions, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import Navbar from './Navbar';
import Loading from './Loading'
import ProductContext from '../context/product-context';
import { addToCart } from './API';



const Users = () => {

  const productContext = React.useContext(ProductContext);
  const [loading,setLoading]=useState(false)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showCategory, setShowCategory] = useState("allProducts");

  

  const addCart = (item) => {
    if(localStorage.getItem("token")===null)
    {
      alert("You need to login first")
      return;
    }
    setLoading(true)
    addToCart(item.id, item)
      .then(response => {
        setLoading(false)
        console.log(response)
      })
      .catch(error => {
        setLoading(false)
        alert("Failed to add to cart")
      })
  }

  const filterProductsChange = (e) => {
    setShowCategory(e.target.value);
  }

  React.useEffect(() => {
    setFilteredProducts(productContext.productDetails)
  },[])

  React.useEffect(() => {
    if (showCategory === "allProducts") {
      setFilteredProducts(productContext.productDetails)
    }
    else {
      setFilteredProducts(productContext.productDetails.filter(ele => ele.description === showCategory))
    }
  }, [showCategory, productContext.productDetails])

  return (
    <>
      
      {localStorage.getItem("token") && <Navbar /> }
      {loading && <Loading />}
      {/* <Typography variant="h3"> Available Products </Typography> */}
      <TextField required label="Category" sx={{ marginTop: "15px", marginBottom: "8px", width: "30%" , marginLeft: "4rem" }} select onChange={filterProductsChange} value={showCategory} >

        <MenuItem value="allProducts">All Products</MenuItem>
        <MenuItem value="electronics" >Electronics</MenuItem>
        <MenuItem value="medicines" >Medicines</MenuItem>
        <MenuItem value="grocery" >Grocery</MenuItem>

      </TextField>

      <Box sx={{ marginTop: 5 }}>
        <Grid container spacing={0.8} alignItems="center" justifyContent="center" display={'-ms-inline-flexbox'} >
          {filteredProducts.map((item) => (
            <Grid key={item.id} >
              <Card sx={{ width: 400, margin: 1.4, backgroundColor: "transparent" }}  >
                <div>
                  <img src={item.pictureUrl} alt={item.name} style={{ height: "300px", width: "400px" }}></img>
                </div>
                <CardContent sx={{ padding: "18px" }}>
                  <Typography variant="h4" >
                    {item.name}
                  </Typography>
                  {/* item.{property name } can be changed according to the api  */}
                  <Typography variant="h5" >
                    Rs. {item.price} /-
                  </Typography>
                </CardContent>

                <CardActions>

                  <Button size="small" color="primary" onClick={() => addCart(item)}>
                    Add to Cart
                  </Button>
                </CardActions>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


      
    </>
  )
}

export default Users