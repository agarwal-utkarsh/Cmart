import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import AdminNavbar from './AdminNavbar';
import { fetchUser, fetchUsers } from './API';
import Loading from './Loading';



const GetUsers = () => {
    const [users, setUsers] = useState([])
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true)
        fetchUsers()
            .then(response => {
                
                setUsers(response.data)
                setLoading(false)
            })

    }, [])



    const idHandler = (e) => {
        console.log(e.target.value)
        if (e.target.value !== "") {
            
            setUsers(users.filter((ele) => {
                return (
                    (ele.id.toString()) === (e.target.value)
                )
            }))
            
            // fetchUser(e.target.value)
            // .then(response=>{
            //     // setUsers(response.data);
            //     console.log(response.data)
            // })
            
        }
        else {
            setLoading(true);
            fetchUsers()
            
                .then(response => {
                    
                    setUsers(response.data);
                    setLoading(false);
                })
        }
    }
    return (
        <div>
            <AdminNavbar />
            <TextField sx={{ marginTop: 3 }} label="Enter Id" variant="outlined" type="number" onChange={idHandler} />
            
            {loading? <Loading /> :
                users.length===0? <Typography variant="h4">Not Found</Typography> :
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell >ID</TableCell>
                            <TableCell >First Name</TableCell>
                            <TableCell >Last Name</TableCell>
                            <TableCell >User Name</TableCell>
                            <TableCell >Email</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            users.map((ele) => {
                                return (
                                    <TableRow key={ele.id} sx={{ border: "2px" }}>

                                        <TableCell >
                                            {ele.id}
                                        </TableCell>
                                        <TableCell >
                                            {ele.name.firstname}
                                        </TableCell>
                                        <TableCell >
                                            {ele.name.lastname}
                                        </TableCell>
                                        <TableCell >
                                            {ele.username}
                                        </TableCell>
                                        <TableCell >
                                            {ele.email}
                                        </TableCell>
                                    </TableRow>

                                )
                            })
                        }
                    </TableBody>

                </Table>
            }
        </div>
    )
}

export default GetUsers