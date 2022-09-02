import axios from "axios"

const url = "https://fakestoreapi.com"

export const getProducts=async ()=>{
    const resp=await axios.get(`${url}/products`)
    return resp
}

export const addProduct=async (data)=>{
    const resp=await axios.post(`${url}/products`,data)
    return resp
}

export const editProduct=async (data,id)=>{
    const resp = await axios.patch(`${url}/products/${id}`,data)
    return resp
}

export const deleteProduct=async (id)=>{
    const resp= await axios.delete(`${url}/products/${id}`)
    return resp
}



export const fetchUsers = async () => {
    const resp = await axios.get(`${url}/users`)
    return resp;

}

// export const fetchUser=async (id)=>{
//     console.log(id);
//     const resp=await axios.get(`${url}/users/${id}`);
//     return resp
// }



export const loginUser=async (userData)=>{
    const resp=await axios.post(`${url}/auth/login`,userData)
    return resp
}

export const loginAdmin=async(adminData)=>{
    const url = 'https://reqres.in/api/login';
    const resp=await axios.post(url,adminData)
    return resp
}