import React, { useEffect, useState } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getCurrentUser } from './API';
const Navbar = () => {
    const [user,setUser]=useState('')
    useEffect(()=>{
        getCurrentUser()
        .then(response=>{
            setUser(response.data.email);
            
        })
        .catch(error=>{
            alert(error)
        })
    },[])
    return (
        <AppBar position="static">
            <Toolbar disableGutters sx={{ backgroundColor: "black" }}>
                <Typography variant='h5' sx={{ color: "whitesmoke" }} >C-Mart</Typography>
                <Link to="/products" style={{ textDecoration: "none" }}><Button variant='oulined' sx={{ color: "white" }}>Show Products</Button></Link>
                <Link to="/products/cart" style={{ textDecoration: "none" }}><Button variant='oulined' sx={{ color: "white" }}>Cart</Button></Link>
                <Link to="/get-orders" style={{ textDecoration: "none" }}><Button variant='oulined' sx={{ color: "white" }}>Orders</Button></Link>
                <Typography sx={{position:"absolute",right:"10rem"}} variant='h8'>{user}</Typography>
                <Link to="/" style={{ textDecoration: "none" }}><Button onClick={() => {
                    localStorage.clear("token");
                    // localStorage.clear("isLogin");
                }} variant='oulined' sx={{
                    border: "none", color: "white",position:"absolute",right:"2rem", top:"0.9rem", bgcolor: "red", ":hover": {
                        color: "white",
                        bgcolor: "#fc4242",
                        border: "none"
                    }
                }}>Logout</Button></Link>
            </Toolbar>

        </AppBar>
    )
}

export default Navbar