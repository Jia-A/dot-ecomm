import "./login.css"
import "../../public-css/root.css";
import "../../public-css/sign-login-auth.css"
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/navbar";

const Login = () => {
return (
<div className="App">
    <Navbar />
    <main class="form-main align-justify-center margin-30">

        <div class="form-container align-justify-center">

            <form action="" class="login-form">
                <h2 class="form-head">Login Form</h2>
                <label for="email" class="label-inp">Email address*</label>
                <input type="text" class="email-id-input input" id="email" required />
                <label for="password" class="label-inp">Password*</label>
                <input type="password" class="input" id="password" required />
                <div class="pass-rem">
                    <label for="">
                        <input type="checkbox" id="remem-me" />
                        Remember me
                    </label>
                    <button class="button read-btn">Forgot your password?</button>
                </div>
                <div>
                    <Link to="/">
                    <button class="submit-btn btn primary-btn">Login</button>
                    </Link>
                </div>
                <Link to="/signup" className="link-style link-color-primary">
                <button class="new-ac button read-btn"> Create new account </button>
                </Link>
            </form>
        </div>
    </main>
</div>
);
};

export { Login };