import React, { useEffect, useState } from 'react'
import { getOrderDetails } from './API'
import { Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const OrderDetails = (props) => {
    
    const [order, setOrder] = useState([]);
    let sum = 0;
    useEffect(() => {
        getOrderDetails(props.item.id)
            .then(response => {
                setOrder(response.data.details)
                // console.log(response.data.details)
            })
            .catch(error => {
                alert(error)
            })
    }, [])


    return (
        <div style={{position:"relative"}}>
            <Typography variant="h5"> 👤 {props.item.customer}</Typography>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {

                        order.map(ele => {
                            sum = sum + (ele.quantity * ele.price);

                            return (
                                <TableRow key={ele.productId} sx={{ border: "6px" }}>
                                    <TableCell>
                                        {ele.productId}
                                    </TableCell>
                                    <TableCell>
                                        {ele.product}
                                    </TableCell>
                                    <TableCell>
                                        {ele.price}
                                    </TableCell>
                                    <TableCell>
                                        {ele.quantity}
                                    </TableCell>
                                    <TableCell>
                                        {ele.quantity * ele.price}

                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            <Typography sx={{position:"absolute", right:"25px",marginTop:"9px"}} >Rs.{sum}</Typography>
        </div>
    )
}

export default OrderDetails