import React, { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'
import { addUser } from './API';

const UserRegister = () => {
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        const data={
            Username:userName,
            Firstname:firstName,
            lastname:lastName,
            Email:email,
            Password:password
        }
        // addUser(data).then().catch
        addUser(data)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error.response);
        })
        setUserName('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <Box sx={{
                width: 600,
                height: 400,
                // backgroundColor: 'white',

                margin: "0 auto",

            }}>
                <Typography variant="h4" mt={5} sx={{ textAlign: "center" }}>User Registration</Typography>
                <form onSubmit={submitHandler}
                    style={{
                        marginTop: "5px",

                    }}>
                    <div style={{
                        marginTop: "5%",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <TextField onChange={(e) => setUserName(e.target.value)} value={userName} required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" label="User Name" />
                        <TextField onChange={(e) => setFirstName(e.target.value)} value={firstName} required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" label="First Name" />
                        <TextField onChange={(e) => setLastName(e.target.value)} value={lastName} required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" label="Last Name" />
                        <TextField onChange={(e) => setEmail(e.target.value)} value={email} required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" label="Email" type="email" />

                        <TextField onChange={(e) => setPassword(e.target.value)} value={password} required sx={{ marginBottom: "8px", width: "50%" }} variant="outlined" type="password" label="Password" />


                        <Button type="submit" variant="outlined" sx={{
                            color: "white", border: "none", bgcolor: "green", ":hover": {
                                bgcolor: "#17994f",
                                color: "white",
                                border: "none"
                            }
                        }}  >Register</Button>
                    </div>



                </form>
            </Box>
        </div>
    )
}

export default UserRegister