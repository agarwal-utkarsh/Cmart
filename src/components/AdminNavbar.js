import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const AdminNavbar = () => {
    return (
        <AppBar position="static">
            <Toolbar disableGutters sx={{ backgroundColor: "black" }}>
                <Typography variant='h5' sx={{ color: "whitesmoke" }} >C-Mart</Typography>
                <Link to="/add-products" style={{ textDecoration: "none" }}><Button variant='oulined' sx={{ color: "white" }}>Add Products</Button></Link>
                <Link to="/admin-products" style={{ textDecoration: "none" }}><Button variant='oulined' sx={{ color: "white" }}>Show Products</Button></Link>
                <Link to="/order-supplier" style={{ textDecoration: "none" }}><Button variant='oulined' sx={{ color: "white" }}>Fill Inventory</Button></Link>
                <Link to="/get-users" style={{ textDecoration: "none" }}><Button variant='oulined' sx={{ color: "white" }}>Customers</Button></Link>
                <Link to="/" style={{ textDecoration: "none" }}><Button onClick={() => {
                    localStorage.clear("token");
                    localStorage.clear("isLogin");
                }} variant='oulined' sx={{
                    border: "none", color: "white", position: "absolute", right: "2rem", top: "0.9rem", bgcolor: "red", ":hover": {
                        color: "white",
                        bgcolor: "#fc4242",
                        border: "none"
                    }
                }}>Logout</Button></Link>
            </Toolbar>

        </AppBar>
    )
}

export default AdminNavbar