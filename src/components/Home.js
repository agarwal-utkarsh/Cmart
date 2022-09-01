import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div >
            <Typography variant='h4'>Continue as:</Typography>
            <Link to="/admin-login" style={{ textDecoration: "none" }}><Button variant='contained' sx={{ color: "white", backgroundColor: "black", marginLeft: "8px" }} >Admin</Button></Link>
            <Link to="/user-login" style={{ textDecoration: "none" }}><Button variant='contained' sx={{ color: "white", backgroundColor: "black", marginLeft: "8px" }} >User</Button></Link>

        </div>
    )
}

export default Home