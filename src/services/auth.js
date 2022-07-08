import axios from "axios";

const signUpAPI = (user) => {
    return axios.post("/api/auth/signup", user);
};

const loginAPI = async (user) => {  
    return axios.post("/api/auth/login", user);
};

export {
    loginAPI,
    signUpAPI
};