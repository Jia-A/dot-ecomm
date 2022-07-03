import {
    useContext,
    createContext,
    useState
} from "react";
import {
    useNavigate
} from "react-router-dom";
import {
    loginAPI,
    signUpAPI
} from "../services/auth.js";
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const loginHandler = async (user) => {
        console.log("entered login")
        try {
            console.log("hey")
            const response = await loginAPI(user) 
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem("token", response.data.encodedToken);
                localStorage.setItem("user", JSON.stringify(response.data.foundUser));
                setToken(response.data.encodedToken);
                setUser(response.data.foundUser);
                navigate("/")
            }
            toast.success("Login Successful")
        } catch (err) {
            console.log(err)
            toast.error("Login Failed")
        }

    }

    const signupHandler = async (user) => {
        console.log("entered signup")
        try {
            const response = await signUpAPI(user)
            if (response.status === 201) {
                localStorage.setItem("token", response.data.encodedToken);
                localStorage.setItem("user", JSON.stringify(response.data.createdUser));
                setToken(response.data.encodedToken);
                setUser(response.data.createdUser)
                navigate("/")
            }
            toast.success("Signup Successful")
        } catch (err) {
            console.log(err)
            toast.error("Signup Failed")
        }
    }

    const logoutHandler = () => {
        navigate("/")

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);

    }
    return ( <AuthContext.Provider value = {
            {
                token,
                user,
                loginHandler,
                signupHandler,
                logoutHandler
            }
        } > {
            children
        } </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export {
    useAuth,
    AuthProvider
};