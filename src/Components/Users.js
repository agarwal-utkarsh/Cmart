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
        const newData = {
            id: new Date().getTime().toString(),
            name: curElem.name,
            price: curElem.price,
            image: curElem.image,
            quantity: curElem.quantity,
        };
        setCart([...cartp , newData]);
    };

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
    
        <h1>User Page</h1>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
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
    </Box>

    <UserCart uc={cartp}/>
    </>
  )
}

export default Users