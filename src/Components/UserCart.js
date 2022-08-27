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

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import {useState} from 'react'
import CheckOut from './CheckOut'

const UserCart = (props) => {

    console.log(props.uc)

    const [ buy , setBuy ] = useState([])

    const [ count, setCount ] = useState('');


    const checkoutProduct = (index) => {
      
      const finalValue = {
        id: index.id,
        name: index.name,
        price: index.price,
        image: index.image,
        units: count, 
        net_quantity: index.quantity,
      };

        setBuy([...buy , finalValue]);
    };




    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #ced4da',
          fontSize: 19,
          padding: '10px 26px 10px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
      }));





  return (
    <>
    
        <h1>Users Cart</h1>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} alignItems="center" justifyContent="center" >
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
                        Rs. {item.price} /-
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>

                    
                    </CardContent>
                    
                </CardActionArea>

                <div>

                <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">No. of Units</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={count}
          label="No. of Units"
          onChange={ (event) => setCount(event.target.value) }
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </Box>


    </div>


                <CardActions>
                    <Button size="small" color="primary" onClick={ () => checkoutProduct(item) }>
                    Buy Now
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        ) )}
      </Grid>
    </Box>

    <CheckOut co={buy} />
    </>
  )
}

export default UserCart