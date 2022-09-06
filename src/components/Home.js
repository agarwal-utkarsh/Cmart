import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div >
            <Typography variant='h4'>Continue as:</Typography>
            <Link to="/admin-login" style={{ textDecoration: "none" }}><Button variant='contained' sx={{
                color: "white", backgroundColor: "black", border: "none", marginLeft: "8px", ":hover": {
                    border: "none",
                    color: "white",
                    bgcolor: "#525151"
                }
            }} >Admin</Button></Link>
            <Link to="/user-login" style={{ textDecoration: "none" }}><Button variant='contained' sx={{
                color: "white", backgroundColor: "black", border: "none", marginLeft: "8px", ":hover": {
                    border: "none",
                    color: "white",
                    bgcolor: "#525151"
                }
            }} >User</Button></Link>

        </div>
    )
}

export default Home