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

        <Box sx={{ flexGrow: 1 }}>
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
                        {item.name}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div">
                        Rs. {item.price} /-
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
    </Box>


    </>
  )
}

export default CheckOut