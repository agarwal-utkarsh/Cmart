import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Navbar from './Navbar';

const UserLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('')
    const userNameChangeHandler = (e) => {
        setUserName(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const userData = {
            email: userName, // username or eamil as per requirement by the api
            password: password,
        }
        const data = JSON.stringify(userData)
        console.log(data);
        const url = 'https://reqres.in/api/login';
        axios.post(url, userData).then(res => {
            console.log(res.data.token);
            setToken(res.data.token);
            if (res.data.token) {
                console.log("Token generated");
            }
        })

    }

    return (
        <div style={{
            textAlign: "center", justifyContent: "center",
            alignItems: "center",
        }}>
            {
                !token ? <Box sx={{
                    width: 600,
                    height: 400,
                    // backgroundColor: '#ccc',

                    margin: "0 auto",

                }}>
                    <Typography variant="h4" mt={5}>User Login</Typography>
                    <form onSubmit={submitHandler} style={{
                        marginTop: "5px",

                    }}>
                        <div style={{
                            marginTop: "5%",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <TextField required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" onChange={userNameChangeHandler} label="User Name" value={userName} />

                            <TextField required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" onChange={passwordChangeHandler} type="password" label="Password" value={password} />

                        </div>


                        <Button type="submit" variant="outlined" sx={{ color: "purple" }} >Login</Button>

                    </form>
                </Box>
                :
                <Navbar /> 
                 
            }

        </div>
    )
}

export default UserLogin