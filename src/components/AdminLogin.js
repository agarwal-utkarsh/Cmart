import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import { Navigate } from 'react-router-dom';
import { loginAdmin } from './API';

const AdminLogin = () => {
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const adminNameChangeHandler = (e) => {
        setAdminName(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        setErrMsg('');
    }, [adminName, password])

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        const adminData = {
            username: adminName, // username or eamil as per requirement by the api
            password: password,
        }

        loginAdmin(adminData)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                console.log(response.data.token);
                setErrMsg('')
                setLoading(false)
            })
            .catch(error => {
                setErrMsg(error.response.data.title);
                setLoading(false);
            })
    }

    return (
        <div style={{
            textAlign: "center", justifyContent: "center",
            alignItems: "center",
        }}>
            {
                !(localStorage.getItem("token")) ? <Box sx={{
                    width: 600,
                    height: 400,
                    // backgroundColor: '#ccc',

                    margin: "0 auto",

                }}>
                    <Typography variant="h4" mt={5}>Admin Login</Typography>
                    <form onSubmit={submitHandler} style={{
                        marginTop: "5px",

                    }}>
                        <div style={{
                            marginTop: "5%",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <TextField required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" onChange={adminNameChangeHandler} label="User Name" value={adminName} />

                            <TextField required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" onChange={passwordChangeHandler} type="password" label="Password" value={password} />
                            {loading && <Typography variant="h5">Logging you in...</Typography>}
                            {errMsg && <Typography variant="h5">{errMsg}</Typography>}

                        </div>


                        <Button type="submit" variant="outlined" sx={{
                            color: "white",border:"none", bgcolor: "green", ":hover": {
                                bgcolor: "#17994f",
                                color: "white",
                                border:"none"
                            }
                        }} >Login</Button>

                    </form>
                </Box>
                    :
                    <AdminNavbar />

            }

        </div>
    )
}

export default AdminLogin