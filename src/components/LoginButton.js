import { Button,MenuItem,Menu } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginButton = () => {
    const [open, setOpen] = useState(false)
    
    const handleClose=(e)=>{
        setOpen(prevState=>!prevState)
        
    }
    
  return (
    <div>
        <Button variant="outlined" sx={{color:'white',bgcolor:"black",position:"absolute",right:"4rem",top:"2rem"}} aria-controls="menu-appbar" onClick={handleClose}>
            Login
        </Button>
        <Menu
                id="menu-appbar"
                
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                
                open={open}
                onClose={handleClose}
              >
                <Link to="/admin-login" style={{textDecoration:"none",color:"GrayText"}} ><MenuItem onClick={handleClose}>Admin Login</MenuItem></Link>
                <Link to="user-login" style={{textDecoration:"none",color:"GrayText"}}><MenuItem onClick={handleClose}>User Login</MenuItem></Link>
              </Menu>
        
    </div>
  )
}

export default LoginButton