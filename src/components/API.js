import axios from "axios"


const URL="https://localhost:7150";

export const getProducts=async ()=>{
    const resp=await axios.get(`${URL}/controller`)
    return resp
}

export const addProduct=async (data)=>{
    
    const resp=await axios.post(`${URL}/controller`,data,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })

    return resp
}

export const editProduct=async (data,id)=>{
    
    
    
    const resp = await axios.put(`${URL}/controller/${id}`,data,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}

export const deleteProduct=async (id)=>{
    // const resp= await axios.delete(`${url}/products/${id}`)
    const resp=await axios.delete(`${URL}/controller/${id}`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}



// export const fetchUsers = async () => {
//     const resp = await axios.get(`${url}/users`)
//     return resp;

// }

// export const fetchUser=async (id)=>{
//     console.log(id);
//     const resp=await axios.get(`${url}/users/${id}`);
//     return resp
// }



export const loginUser=async (userData)=>{
    // const resp=await axios.post(`${url}/auth/login`,userData)
    const resp=await axios.post(`${URL}/api/Auth/login`,userData);
    return resp
}

export const loginAdmin=async (adminData)=>{
    // const resp=await axios.post(`${url}/auth/login`,userData)
    const resp=await axios.post(`${URL}/api/Auth/login`,adminData);
    return resp
}

export const addUser=async (userData)=>{
    
    const resp=await axios.post(`${URL}/api/Auth/Register`,userData)
    return resp
}

export const addToCart =async (id,item)=>{
    
    const resp= await axios.post(`${URL}/api/Cart2/AddtoCart/${id}`,item, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}

export const getCart=async ()=>{
    const resp =await axios.get(`${URL}/api/Cart2/GetCartItems`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}

export const getTotal=async ()=>{
    const resp = await axios.get(`${URL}/api/Cart2/GetTotalAmount`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}

export const removeCart=async(cartId,productId)=>{
    const resp= await axios.delete(`${URL}/api/Cart2/RemoveItemsFromCart?removeCartID=${cartId}&removeProductID=${productId}`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}

export const editCart=async(data,cartId,productId,quantity)=>{
    
    const resp=await axios.put(`${URL}/api/Cart2/UpdateCartItems?updateCartID=${cartId}&updateProductID=${productId}&quantity=${quantity}`,data,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}

export const buyNow = async(details)=>{
    
    const resp=await axios.post(`${URL}/api/Order`,{details},{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}

export const getOrders=async()=>{
    const resp=await axios.get(`${URL}/api/Order`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}

export const getOrderDetails=async(id)=>{
    
    const resp=await axios.get(`${URL}/api/Order/GetOrders/${id}`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}

export const clearCart =async()=>{
    const resp=await axios.delete(`${URL}/api/Cart2/DeleteCartItems`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}

export const getCurrentUser=async()=>{
    const resp=await axios.get(`${URL}/api/Auth/Currentuser`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
    return resp
}