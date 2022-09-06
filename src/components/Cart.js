import React, { useEffect, useState } from 'react'
import { buyNow, editCart, getCart, getTotal, removeCart } from './API';
import Navbar from './Navbar';
import { Card, Grid, Box, CardContent, Typography, CardActions, Button, TextField } from '@mui/material'
import Loading from './Loading';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(0)
    const [buy, setBuy] = useState([])
    const [loading, setLoading] = useState(false)
    const [isFetched, setIsFetched] = useState(false)
    const [total, setTotal] = useState(0);
    const [isRefreshed, setisRefreshed] = useState(false)
    useEffect(() => {
        setLoading(true)
        getCart()
            .then(response => {
                setLoading(false)
                // console.log(response.data);
                setCartItems(response.data)


            })
            .catch(error => {
                console.log(error);
                setLoading(false)
                alert(error);
            })

        getTotal()
            .then(response => {
                setLoading(false)
                setTotal(response.data)
            })
            .catch(error => {
                setLoading(false)
                alert(error);
            })

    }, [])

    useEffect(() => {
        if (isRefreshed === true) {
            // setLoading(true)
            getCart()
                .then(response => {
                    setLoading(false)
                    setCartItems(response.data)


                })
                .catch(error => {
                    setLoading(false)
                    alert(error);

                })

            getTotal()
                .then(response => {
                    setLoading(false)
                    setTotal(response.data)

                })
                .catch(error => {
                    setLoading(false)
                    alert(error);

                })
            setisRefreshed(false)
        }
    }, [isRefreshed])

    const cartEdit = (data, cartId, productId) => {
        if (qty === 0) {
            alert("Qty must be more than 0")
            return
        }
        setLoading(true);
        console.log(data)
        editCart(data, cartId, productId, qty)
            .then(response => {
                console.log(response);
                setisRefreshed(true);
                setLoading(false)
            })
            .catch(error => {
                alert(error)
                setisRefreshed(false);
                setLoading(false)
            })
        setQty(0)
    }

    const removeHandler = (cartId, productId) => {
        setLoading(true)
        removeCart(cartId, productId)
            .then(response => {


                setisRefreshed(true);
            })
            .catch(error => {
                alert(error);
                setisRefreshed(false);
            })

    }

    useEffect(() => {
        if (isFetched) {
            buyNow(buy)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    alert(error)
                })
            setIsFetched(false)
        }


    }, [isFetched])


    const buyNowHandler = () => {
        // console.log(cartItems)
        cartItems.forEach((item) => {
            // console.log(item.product)
            // console.log(item)
            const data = {
                productId: item.product.id,
                product: item.product.name,
                price: item.product.price,
                quantity: item.quantity
            }
            console.log(data);
            setBuy(prevState => {
                return [
                    ...prevState, data
                ]
            })
        })

        setIsFetched(true)
    }



    return (
        <div >
            <Navbar />
            {loading === true && <Loading />}
            <h3>Total Amount - Rs {total} </h3>
            <Button onClick={buyNowHandler} variant='contained' sx={{
                color: "white", bgcolor: "green", position: "absolute", right: "2rem", ":hover": {
                    bgcolor: "#17994f",
                    color: "white"
                }
            }} >Buy Now</Button>

            {
                cartItems.map((ele) => {
                    return (
                        <Box key={ele.itemId} sx={{ marginTop: 5, display: "inline-block" }}>
                            <Grid container spacing={1} >
                                <Card sx={{ width: 400, margin: 2.4, backgroundColor: "transparent" }}  >
                                    <CardContent>
                                        <div>
                                            <img src={ele.product.pictureUrl} style={{ height: "300px", widht: "300px" }}></img>
                                        </div>
                                        <Typography variant="h4" >
                                            {/* {item.name} */}
                                            {ele.product.name}
                                        </Typography>
                                        <Typography variant="h6" >
                                            {/* {item.name} */}
                                            Rs {ele.product.price}
                                        </Typography>

                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <TextField variant="outlined" label="Set Quantity" sx={{ width: "50%", height: "50%" }}
                                                onChange={(e) => { setQty(e.target.value) }} ></TextField>
                                            <Typography variant="h7" >
                                                {/* {item.name} */}
                                                Quantity- {ele.quantity}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined" sx={{
                                            border: "none", color: "white", bgcolor: "red", ":hover": {
                                                color: "white",
                                                bgcolor: "#fc4242",
                                                border: "none"
                                            }
                                        }} onClick={() => removeHandler(ele.cartId, ele.productId)}>Remove from cart</Button>
                                        <Button variant='outlined' onClick={() => cartEdit(ele.product, ele.cartId, ele.productId)} >Update</Button>
                                    </CardActions>

                                </Card>
                            </Grid>
                        </Box>
                    )
                })
            }
        </div>
    )
}

export default Cart