import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import Users from './Users';

const Home = () => {
    return (
        <div style={{position:"relative"}}>
            <LoginButton />
            
            <Users />
        </div>
    )
}

export default Home