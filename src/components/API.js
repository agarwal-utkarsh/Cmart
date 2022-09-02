import axios from "axios"

const url = "https://fakestoreapi.com"

export const fetchUsers = async () => {
    const resp = await axios.get(`${url}/users`)
    return resp;

}

// export const fetchUser=async (id)=>{
//     console.log(id);
//     const resp=await axios.get(`${url}/users/${id}`);
//     return resp
// }