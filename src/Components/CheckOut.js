import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';


import {useState} from 'react'


const CheckOut = (props) => {
  console.log(props.co)

  const [ total , setTotal ] = useState(0)
    

    return (
    <>

        <h1>CheckOut Page</h1>


        <Card sx={{ maxWidth: 345, margin: 2.4, backgroundColor: "transparent" }}>
      <CardActionArea>
      <Typography variant="body2" color="text.secondary">
            Congratulations!! Your Order No. {props.co.id} has been placed Successfully
            for {props.co.productQuantity} Units
          </Typography>
        <CardMedia
          component="img"
          height="375"
          image={props.co.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.co.productName}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Product ID - {props.co.id}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Number of Units Purchased - {props.co.productQuantity}
          </Typography>

        </CardContent>
        <Typography variant="h4" color="text.primary" textAlign="center" component="div">
            Amount to be Paid is Rs. {props.co.productPrice * props.co.productQuantity} /-
          </Typography>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
        {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} alignItems="center" justifyContent="center" >
        {props.co.map( (item) => (
        <Grid>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <Typography gutterBottom variant="h4" component="div">
                        Order placed Successfully
                    </Typography> 
                    <CardMedia
                    component="img"
                    height="320"
                    image={item.image}
                    alt="POC"
                    />
                    <CardContent>
 
                    <Typography gutterBottom variant="h4" component="div">
                        {item.productName}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div">
                        Rs. {item.productPrice} /-
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Number of Unit/s: {item.count}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Keep Shopping
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        ) )}
      </Grid>
    </Box> */}


    </>
  )
}

export default CheckOut