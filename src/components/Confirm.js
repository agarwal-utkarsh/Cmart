import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getTotal } from './API'
import Navbar from './Navbar'

const Confirm = () => {
    const[amt,setAmt]=useState(0)
    useEffect(()=>{
        getTotal()
        .then(response=>{
            setAmt(response.data)
        })
        .catch(error=>{
            alert(error);
        })
    },[])
  return (
    <div>
        <Navbar />
        <Typography variant='h3' >Order Successfull!</Typography>
        <Typography variant='h4'>Amount to be paid {amt}</Typography>
        
    </div>
  )
}

export default Confirm