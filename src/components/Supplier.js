import { Box, Typography,Button } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom';
import AdminNavbar from './AdminNavbar'

const Supplier = () => {
    return (
        <>
            {!localStorage.getItem("token") ?
                <div>
                    <Typography variant='h4'>You need to login First</Typography>
                    <Link to="/admin-login" style={{ textDecoration: "none" }} ><Button variant='outlined' >Login Now</Button></Link>
                </div>
                :
                <div style={{
                    textAlign: "center", justifyContent: "center",
                    alignItems: "center",
                }}>
                    <AdminNavbar />
                    <Typography>This is page for supplier</Typography>
                </div>
            }
        </>
    )
}

export default Supplier