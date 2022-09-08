import { Typography, Button, CardActions, CardContent, Card, Box, Grid, Modal, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getOrders } from './API'
import Navbar from './Navbar'
import OrderDetails from './OrderDetails'

const GetOrders = () => {
    const [orders, setOrders] = useState([])
    const [orderDetails, setOrderDetails] = useState('');
    const [open, setOpen] = useState(false);

    const hideModal = () => setOpen(false);
    const showModal = (item) => {
        setOrderDetails(item);
        setOpen(true);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

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
        <>
            <div>
                <Navbar />
                {
                    orders.map((ele) => {
                        return (
                            <Box key={ele.id} sx={{ marginTop: 5, display: "inline-block" }}>
                                <Grid container spacing={1} >
                                    <Card sx={{ width: 400, minHeight: 400, margin: 2.4, backgroundColor: "transparent" }}  >
                                        <CardContent sx={{ position: "relative" }}>
                                            <Typography variant="h7" sx={{ position: "absolute", right: "8px", fontWeight: "bold", fontFamily: "monospace", fontSize: "large" }} >
                                                Order ID-{ele.id}

                                            </Typography>
                                            <Typography variant="h4" >
                                                {/* Order Details */}
                                                <Table sx={{ marginTop: "2rem" }}>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Image</TableCell>
                                                            <TableCell>Product</TableCell>
                                                            <TableCell>Price</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {
                                                            ele.orderDetails.map((detail) => {
                                                                return (
                                                                    <TableRow key={detail.id}>
                                                                        <TableCell><Avatar src={detail.product.pictureUrl} alt={detail.product.name} /></TableCell>
                                                                        <TableCell>{detail.product.name}</TableCell>
                                                                        <TableCell>{detail.product.price}</TableCell>
                                                                    </TableRow>
                                                                )
                                                            })
                                                        }
                                                    </TableBody>
                                                </Table>
                                            </Typography>

                                            <div style={{ display: "flex", flexDirection: "column" }}>

                                                <Typography variant="h7" >
                                                    {/* {item.name} */}
                                                    {/* Quantity- {ele.quantity} */}
                                                </Typography>
                                            </div>
                                        </CardContent>

                                        <CardActions sx={{ position: "relative" }}  >
                                            <Button variant="outlined" sx={{
                                                border: "none", color: "white", position: "absolute", right: "16px", bgcolor: "red", ":hover": {
                                                    color: "white",
                                                    bgcolor: "#fc4242",
                                                    border: "none"
                                                }
                                            }} onClick={() => showModal(ele)} >Details</Button>

                                        </CardActions>

                                    </Card>
                                </Grid>
                            </Box>
                        )
                    })
                }
            </div>

            <Modal
                open={open}
                onClose={hideModal}
            >
                <Box sx={style}>

                    <Typography variant="h5">Order details</Typography>
                    <OrderDetails item={orderDetails} />
                    <Button sx={{ marginTop: "15px" }} variant='outlined' onClick={hideModal} >Close</Button>
                </Box>
            </Modal>
        </>
    )
}

export default GetOrders