import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Navbar from './Navbar';
import { loginUser } from './API';
import { Link, useNavigate } from 'react-router-dom';
import Users from './Users';

const UserLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('');
    const navigate=useNavigate()

    const userNameChangeHandler = (e) => {
        setUserName(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        setErrMsg('');
    }, [userName, password])

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        const userData = {
            username: userName, // username or eamil as per requirement by the api
            password: password,
        }



        loginUser(userData)
            .then(res => {
                // console.log(res.data);
                setErrMsg('');
                localStorage.setItem("token", res.data.token)
                setLoading(false);
                navigate('/products')
            })
            .catch(error => {
                setLoading(false);
                setErrMsg(error.response.data.title);
                console.log(error.response.data.title);


            })
            
    }

    return (
        <div style={{
            textAlign: "center", justifyContent: "center",
            alignItems: "center",
        }}>
            {
                // !(localStorage.getItem("token")) ?
                 <Box sx={{
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
                            {loading && <Typography variant="h5">Logging you in...</Typography>}
                            {errMsg && <Typography variant="h5">{errMsg}</Typography>}
                        </div>


                        <Button type="submit" variant="outlined" sx={{
                            color: "white", border: "none", bgcolor: "green", ":hover": {
                                bgcolor: "#17994f",
                                color: "white",
                                border: "none"
                            }
                        }} >Login</Button>
                        <br />
                        <Link to="/user-reg">New user? Signup here</Link>
                    </form>
                </Box>
                

                    

            }

        </div>
    )
}

export default UserLogin