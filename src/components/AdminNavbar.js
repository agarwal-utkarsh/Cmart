import React,{useState,useEffect} from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getCurrentUser } from './API';
const AdminNavbar = () => {
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
                <Link to="/add-products" style={{ textDecoration: "none" }}><Button variant='oulined' sx={{ color: "white" }}>Add Products</Button></Link>
                <Link to="/admin-products" style={{ textDecoration: "none" }}><Button variant='oulined' sx={{ color: "white" }}>Show Products</Button></Link>
                <Typography sx={{position:"absolute",right:"10rem"}} variant='h8'>{user}</Typography>
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