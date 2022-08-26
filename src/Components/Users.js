import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import UserCart from './UserCart';
import { useState } from 'react'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Users = () => {


    const [ cartp , setCart ] = useState([])

    // Adding the products in the Cart State
    const addCart = (curElem) => {
        setCart([...cartp , curElem]);
    };

    const items = [
        {
            name: "LG Ultra Gear",
            price: "Rs. 20,200 /-",
            category: "Electronics",
            image: "https://www.lg.com/in/images/monitors/md07549018/gallery/24GN600-B-D-1.jpg",
        },

        {
            name: "OnePlus 10 Pro",
            price: "Rs. 49,000 /-",
            category: "Smart Phones",
            image: "https://www.91-cdn.com/hub/wp-content/uploads/2021/11/OnePlus-10-Pro.jpg",
        },

        {
            name: "Ferrero Rocher",
            price: "Rs. 1000 /-",
            category: "Chocolates",
            image: "https://m.media-amazon.com/images/I/71uNpGYLbnL._SL1100_.jpg",
        },
    ];


  return (
    <>
    
        <h1>User Page</h1>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {items.map( (item) => (
        <Grid>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="320"
                    image={item.image}
                    alt="POC"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {item.name}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div">
                        {item.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
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
    </Box>

    <UserCart uc={cartp}/>
    </>
  )
}

export default Users