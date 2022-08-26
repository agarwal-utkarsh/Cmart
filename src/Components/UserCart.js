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

const UserCart = (props) => {
    console.log(props.uc)
  return (
    <>
    
        <h1>Users Cart</h1>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {props.uc.map( (item) => (
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
                    <Button size="small" color="primary">
                    Buy Now
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

export default UserCart