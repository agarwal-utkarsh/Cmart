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
import CheckOut from './CheckOut'






const UserCart = (props) => {

    console.log(props.uc)


    const [ buy , setBuy ] = useState([])

    const [ countOrder, setCountOrder ] = useState('');

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();


  

  

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);



    // Buying the product from Cart
    const checkoutProduct = (index) => {
      
      const finalValue = {
        id: index.id,
        name: index.name,
        price: index.price,
        image: index.image,
        count: countOrder, 
        net_quantity: index.quantity,
      };

        if( (countOrder < 5) && (countOrder < index.quantity) ) {
          setBuy([...buy , finalValue])
          setSuccess(false);
          setLoading(true);
          timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);
          }, 2000);
        } else if(countOrder === 0) {
          alert("Please select the number of units")
        } else {
          alert("You have exceeded the Order Limit")
        }


    };

    // Removing a product from User's Cart
    const removeProduct = (index) => {
      const updatedProductList = buy.filter( (curProduct) => {
        return (curProduct.id !== index);
      } );
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
        <Box sx={{ flexGrow: 1 }} m={3} p={5}  >
      <Grid container spacing={1} alignItems="center" justifyContent="center" display={'-ms-inline-flexbox'} flexDirection={'column'}  >
        {props.uc.map( (item) => (
        <Grid    >
            <Card sx={{ maxWidth: 245 , maxHeight: 'fitContent'}} 
                      component="span"
                      m={4} //margin
                      p={4} //padding
                      boxShadow={12}> 
                <CardActionArea >
                    <CardMedia
                    component="img"
                    height="250"
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
                      Please Select the Number of orders, you want to place.
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
                      value={countOrder}
                      label="No. of Units"
                      onChange={ (event) => setCountOrder(event.target.value) }
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

                    

                    <Box sx={{ display: 'flex', alignItems: 'center' }} p={1}>

                      <Box sx={{ m: 1, position: 'relative' }}>
                        <Button
                          variant="contained"
                          sx={buttonSx}
                          disabled={loading}
                          onClick={ () => checkoutProduct(item)}
                        >
                          Buy Now
                        </Button>
                        {loading && (
                          <CircularProgress
                            size={24}
                            sx={{
                              color: green[500],
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              marginTop: '-12px',
                              marginLeft: '-12px',
                            }}
                          />
                        )}
                      </Box>
                    </Box>


                    <Button variant="contained" onClick={ () => removeProduct(item.id) }>
                    Remove From Cart
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