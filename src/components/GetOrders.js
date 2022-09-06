import { Typography, Button, CardActions, TextField, CardContent, Card, Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getOrders } from './API'
import Navbar from './Navbar'

const GetOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        getOrders()
            .then(response => {
                console.log(response.data)
                setOrders(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <Navbar />
            {
                orders.map((ele) => {
                    return (
                        <Box key={ele.id} sx={{ marginTop: 5, display: "inline-block" }}>
                            <Grid container spacing={1} >
                                <Card sx={{ width: 400, margin: 2.4, backgroundColor: "transparent" }}  >
                                    <CardContent>
                                        {/* <div>
                                        <img src={ele.product.pictureUrl} style={{ height: "300px", widht: "300px" }}></img>
                                    </div> */}
                                        <Typography variant="h4" >
                                            Order ID-{ele.id}

                                        </Typography>
                                        <Typography variant="h6" >
                                            Order Details
                                            {
                                                ele.orderDetails.map((detail)=>{
                                                    return(
                                                        <Typography key={detail.id} > {detail.productId} </Typography>
                                                    )
                                                })
                                            }
                                        </Typography>
                                            {/* {
                                                ele.orderDetails.map((detail=>{
                                                    console.log(detail.productId)
                                                }))
                                            } */}
                                        <div style={{ display: "flex", flexDirection: "column" }}>

                                            <Typography variant="h7" >
                                                {/* {item.name} */}
                                                {/* Quantity- {ele.quantity} */}
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
                                        }} >Details</Button>

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

export default GetOrders