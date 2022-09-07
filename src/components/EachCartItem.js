import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckOut from './CheckOut'
import { Routes, Route, Link} from 'react-router-dom';
import {useState} from 'react'

const EachCartItem = (props) => {
    // console.log(props)

    const [ recv , setRecv ] = useState(props)
    const [ count , setCount ] = useState(1)
    const [ buy , setBuy ] = useState([])

    
    const checkOut = ( ob ) => {
      // console.log(ob.recv.id)
      // console.log(ob.count)

      const newDat = {
        id: ob.recv.id,
        productName: ob.recv.productName,
        productPrice: ob.recv.productPrice,
        image: ob.recv.image,
        quantity: ob.recv.quantity,
        productQuantity: ob.count, 
      };

      setBuy(newDat)
      
      
    };

    const deleteHandler = (o1) => {
      
      props.remove(o1)
    };

    const obj = {
      recv: recv,
      count: count
    } 


  return (
    <>
    
    <Card sx={{ maxWidth: 345  , marginLeft: '12px' , padding: '7px' , marginTop: '11px' ,marginBottom: '11px', margin: 2.4, backgroundColor: "transparent"}} >
      <CardMedia
        component="img"
        height="200"
        image={recv.image}
        alt="POC_CMP"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recv.productName} {recv.id}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          Product ID {recv.id}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {recv.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Rs. {recv.productPrice} /-
        </Typography>
      </CardContent>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      p={2}
    >
      <TextField id="outlined-basic" label="Enter No. of Units" variant="outlined" value={count} onChange={ (e) => setCount(e.target.value) } />
    </Box>
      <CardActions>

        <Button onClick={ () => checkOut(obj)}>Buy Now</Button>
        <Button onClick={ () => deleteHandler(recv.id) }>Remove From Cart</Button>
      </CardActions>
    </Card>


      <CheckOut co={buy}/>
      

    </>
  )
}

export default EachCartItem