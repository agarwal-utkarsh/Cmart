import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import { Navigate } from 'react-router-dom';

const AdminLogin = () => {
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('')
    const [loading,setLoading]=useState(false);
    const adminNameChangeHandler = (e) => {
        setAdminName(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        const adminData = {
            email: adminName, // username or eamil as per requirement by the api
            password: password,
        }
        const data = JSON.stringify(adminData)
        console.log(data);
        const url = 'https://reqres.in/api/login';
        axios.post(url, adminData).then(res => {
            
            setToken(res.data.token);
            // setIsLogin(true);
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("isLogin",true);
            setLoading(false);

            if (res.data.token) {
                console.log("Token generated");
            }
        })
            
       
        setPassword('');
        

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
                            
                        </div>


                        <Button type="submit" variant="outlined" sx={{ color: "purple" }} >Login</Button>

                    </form>
                </Box>
                :
                <AdminNavbar /> 
                 
            }

        </div>
    )
}

export default AdminLogin