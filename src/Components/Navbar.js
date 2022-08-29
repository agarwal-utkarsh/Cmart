import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar disableGutters sx={{ backgroundColor: "black" }}>
                <Typography variant='h5' sx={{ color: "whitesmoke" }} >C-Mart</Typography>
                <Link to="/products" style={{ textDecoration: "none" }}><Button variant='oulined' sx={{ color: "white" }}>Show Products</Button></Link>
            </Toolbar>
            
        </AppBar>
    )
}

export default Navbar