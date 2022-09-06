import * as React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, CardActions, MenuItem, TextField } from '@mui/material'
// import { styled } from '@mui/material/styles';
import UserCart from './UserCart';
import { useState } from 'react'
import Navbar from './Navbar';
import ProductContext from '../context/product-context';
import { addToCart } from './API';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


const Users = () => {

  const productContext = React.useContext(ProductContext);

  const [cartp, setCart] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showCategory, setShowCategory] = useState("allProducts");

  // const initialUnit = 0; 
  // const [ units , setUnits] = useState(initialUnit)

  // Adding the products in the Cart State
  // const addCart = (curElem) => {

  //   //  addToCart(curElem.id);
  //     // const newData = {
  //     //     id: curElem.id, 
  //     //     name: curElem.title,
  //     //     price: curElem.price,
  //     //     pictureUrl: curElem.image,
  //     //     // quantity: curElem.quantity,
  //     // };
  //     // setCart([...cartp , newData]);
  //     addToCart(curElem.id)
  //     .then(resp=>{

  //       console.log(resp);
  //     })
  //     .catch(error=>{
  //       console.log(error);
  //       alert("Failed to add to cart "+error.response.status)
  //     })

  // };

  const addCart = (item) => {
    addToCart(item.id, item)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
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
      <Navbar />
      
      
      <Typography variant="h3"> Available Products </Typography>
      <TextField required label="Category" sx={{ marginBottom: "8px", width: "50%" }} select onChange={filterProductsChange} value={showCategory} >

        <MenuItem value="allProducts">All Products</MenuItem>
        <MenuItem value="electronics" >Electronics</MenuItem>
        <MenuItem value="medicines" >Medicines</MenuItem>
        <MenuItem value="grocery" >Grocery</MenuItem>

      </TextField>

      <Box sx={{ marginTop: 5 }}>
        <Grid container spacing={1} alignItems="center" justifyContent="center" display={'-ms-inline-flexbox'} >
          {filteredProducts.map((item) => (
            <Grid key={item.id} >
              <Card sx={{ width: 400, margin: 2.4, backgroundColor: "transparent" }}  >
                <div>
                  <img src={item.pictureUrl} alt={item.name} style={{ height: "300px", widht: "300px" }}></img>
                </div>
                <CardContent>
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

      {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} alignItems="center" justifyContent="center" display={'-ms-inline-flexbox'}  >
        {productContext.productDetails.map( (item) => (
        <Grid>
            <Card sx={{ maxWidth: 345 , maxHeight: '600px' , marginLeft: '12px' , padding: '7px' , marginTop: '11px' , marginBottom: '11px', margin: 2.4, backgroundColor: "transparent"}}  >
                <CardActionArea>
                    <div>
                    <CardMedia
                    component="img"
                    height="250"
                    image={item.image}
                    alt="POC"
                    />
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {item.title}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div">
                        Rs. {item.price} /-
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Numer of Items Available: {item.quantity}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button size="small" color="primary" onClick={ () => addCart(item) }>
                    Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        ) )}
      </Grid>
    </Box> */}

      <UserCart uc={cartp} />
    </>
  )
}

export default Users