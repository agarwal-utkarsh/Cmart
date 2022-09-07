import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import Users from './Users';

const Home = () => {
    return (
        <div style={{position:"relative"}}>
            <Typography variant="h2" sx={{marginLeft: "13px" , marginBottom: "9px" , textAlign:"center" , marginTop:"2rem"}}>C-Mart</Typography>
            <LoginButton />
            
            <Users />
        </div>
    )
}

export default Home