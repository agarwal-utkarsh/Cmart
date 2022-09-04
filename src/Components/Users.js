import * as React from 'react';
import {Box,Paper,Grid,Card,CardContent,CardMedia,Typography,Button, CardActionArea, CardActions, MenuItem, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import UserCart from './UserCart';
import {Link} from 'react-router-dom';
import { useState } from 'react'
import Navbar from './Navbar';
import ProductContext from '../context/product-context';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Users = () => {

    const productContext=React.useContext(ProductContext);
    console.log(productContext.productDetails);
    const [ cartp , setCart ] = useState([])

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showCategory, setShowCategory] = useState('');
    
    // const initialUnit = 0; 
    // const [ units , setUnits] = useState(initialUnit)

    // Adding the products in the Cart State
    const addCart = (curElem) => {

        
        const newData = {
            id: curElem.id,
            productName: curElem.title,
            productPrice: curElem.price,
            image: curElem.image,
            quantity: curElem.quantity,
        };
        setCart([...cartp , newData]);
        
    };

    const filterProductsChange = (e) => { 

        setShowCategory(e.target.value);
       
    
      }

      React.useEffect(()=>{
        setFilteredProducts(productContext.productDetails)
        console.log(productContext.productDetails);
      },[])
      
      React.useEffect(() => {
        if (showCategory === "") {
          setFilteredProducts(productContext.productDetails)
        }
        else {
          setFilteredProducts(productContext.productDetails.filter(ele => ele.category === showCategory))
        }
      }, [showCategory,productContext.productDetails])

    const items = [
        {
            id: 1,
            name: "LG Ultra Gear",
            price: "20200",
            category: "Electronics",
            image: "https://www.lg.com/in/images/monitors/md07549018/gallery/24GN600-B-D-1.jpg",
            quantity: 30,
            buy_quantity: 0,
        },

        {
            id: 2,
            name: "OnePlus 10 Pro",
            price: "49000",
            category: "Smart Phones",
            image: "https://www.91-cdn.com/hub/wp-content/uploads/2021/11/OnePlus-10-Pro.jpg",
            quantity: 20,
            buy_quantity: 0,
        },

        {
            id: 3,
            name: "Ferrero Rocher",
            price: "1000",
            category: "Chocolates",
            image: "https://m.media-amazon.com/images/I/71uNpGYLbnL._SL1100_.jpg",
            quantity: 100,
            buy_quantity: 0,
        },
    ];
    


  return (
    <>
    <Navbar />
        <h1>User Page</h1>
        <Link to="/products/cart">
        <Button variant="contained">Cart</Button>
        </ Link>

        <Typography variant="h3"> Available Products </Typography>
            <TextField required label="Category" sx={{ marginBottom: "8px", width: "50%" }} select onChange={filterProductsChange} >

                <MenuItem value="">Show All Products</MenuItem>
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
                  <img src={item.image} style={{ height: "300px", widht: "300px" }}></img>
                </div>
                <CardContent>
                  <Typography variant="h4" >
                    {item.title}
                  </Typography>
                  {/* item.{property name } can be changed according to the api  */}
                  <Typography variant="h5" >
                    Rs. {item.price} /-
                  </Typography>
                </CardContent>

                <CardActions>

                    <Button size="small" color="primary" onClick={ () => addCart(item) }>
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

 <UserCart uc={cartp}/> 
    </>
  )
}

export default Users