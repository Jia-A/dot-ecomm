import axios from "axios";
import { useAuth } from "../Context/authContext"


const getProducts = async () =>{
    try {
        const response = await axios({
            method : "get",
            url: "/api/products",
        });
    
        if (response.status === 200) return response.data
      } catch (error) {
        console.error(error.response);
      }
}
const getCategories = async () =>{
    try {
        const response = await axios({
            method : "get",
            url: "/api/categories",
        });
    
        if (response.status === 200) return response.data
      } catch (error) {
        console.error(error.response);
      }
}


const getCartProducts = async () =>{
    const { token } = useAuth();
    try { 
        const response = await axios.get("/api/user/cart", { headers : { authorization : token }})
        if(response.status === 200) return response.data
    }
    catch(error){
        console.log(error.response)
    }
}

const postCartProduct = async ( token, product) =>{
    try{
        const response = await axios.post("/api/user/cart", { product }, { headers : { authorization : token}})
        if(response.status === 200 || response.status === 201) return response.data
    }
    catch(error){
        console.log(error.response)
    }
}

const  removeCartProduct = async ( token, _id) =>{
    try {
        const response = await axios({
            method : "delete",
            url : `/api/user/cart/${_id}`,
            headers : { authorization : token },
        })
        if(response.status === 200 || response.status === 201){
            return response.data
        }
    }
    catch(error){
        console.log(error)
    }
}


const getWishlistProducts = async () =>{
    const { token } = useAuth();
    try { 
        const response = await axios.get("/api/user/wishlist", { headers : { authorization : token }})
        if(response.status === 200) return response.data
    }
    catch(error){
        console.log(error.response)
    }
}

const postWishlistProduct = async ( token, product) =>{
    try{
        const response = await axios.post("/api/user/wishlist", { product }, { headers : { authorization : token}})
        if(response.status === 200 || response.status === 201) return response.data
    }
    catch(error){
        console.log(error.response)
    }
}

const  removeWishlistProduct = async ( token, _id) =>{
    try {
        const response = await axios({
            method : "delete",
            url : `/api/user/wishlist/${_id}`,
            headers : { authorization : token },
        })
        if(response.status === 200 || response.status === 201){
            return response.data
        }
    }
    catch(error){
        console.log(error)
    }
}

export {getProducts, getCategories, getCartProducts, getWishlistProducts, removeCartProduct, removeWishlistProduct, postCartProduct, postWishlistProduct}
