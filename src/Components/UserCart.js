import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';



import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import {useState , useEffect} from 'react'
//import CheckOut from './CheckOut'

import EachCartItem from './EachCartItem';






const UserCart = (props) => {

    


    const [ recv , setRecv ] = useState([])

    


    useEffect(() => {
      setRecv(props.uc)
    }, [props.uc])

    useEffect(() => {
      setRecv(props.uc)
    }, [])
    

    

  

  




    // Buying the product from Cart
    const checkoutProduct = (index) => {
      
      const finalValue = {
        id: index.id,
        name: index.productName,
        price: index.productPrice,
        image: index.image,
      };

        // if( (countOrder < 5) && (countOrder < index.quantity) ) {
        //   setBuy([...buy , finalValue])
        //   setSuccess(false);
        //   setLoading(true);
        //   timer.current = window.setTimeout(() => {
        //     setSuccess(true);
        //     setLoading(false);
        //   }, 2000);
        // } else if(countOrder === 0) {
        //   alert("Please select the number of units")
        // } else {
        //   alert("You have exceeded the Order Limit")
        // }



    };


    // Removing a product from User's Cart







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

       const removeHandler = (index) => {
        
        const i = props.uc.findIndex(element => {
          if(element.id === index) {
            return true
          }
          return false
        }) 
        setRecv(recv.filter( (curElem) =>  curElem.id !== index))
        console.log(i)
        props.uc.splice(i , 0) 

       };





  return (
    <>
    
        <h1>Users Cart</h1>
        <Box sx={{ flexGrow: 1 }} m={3} p={5}  >
      <Grid container spacing={1} alignItems="center" justifyContent="center" display={'-ms-inline-flexbox'} flexDirection={'column'}  >
        {recv.map( (item) => (
            <>
            <EachCartItem 
            id= {item.id}
            image= {item.image}
            productName= {item.productName}
            productPrice= {item.productPrice}
            quantity= {item.quantity}
            remove= {removeHandler}
            />
            {/* <Button onClick={ () => removeHandler(item.id) }>Remove From Cart</Button> */}
            </>
            
            
        ) )}
      </Grid>
    </Box>


    </>
  )
}

export default UserCart