import "../../public-css/navbar.css";
import "./signup.css"
import "../../public-css/root.css";
import "../../public-css/sign-login-auth.css"

const Signup = () =>{
    return (
      <div className="App">
        <div class="nav-con">
        <nav class="nav-bar">
            <div>
                <h2 class="website-name"><a href="../../index.html" class="link-style link-color-primary"> D<img src="./images/dot.png" class="dot-img"/>T Store</a></h2>

                <p class="sm-txt"><i>Everything ends with a dot.</i></p>
            </div>
            
            <div class="box">
                <input type="text" placeholder="Search" class="search-box input"/>
            </div> 
            <div class="nav-btn">
                <button class="btn secondary-btn"><a href="../login/login.html" class="link-style link-color">Login</a></button>
                <div class="btn-badge">
                    <button class="btn icon-only-btn"><i class="far fa-user icon"></i></button>
                    <div class="real-badge">6</div>
                </div>
                <div class="btn-badge">
                    <button class="btn icon-only-btn"><a href="../wishlist/wishlist.html"><i class="far fa-heart icon"></i></a></button>
                    <div class="real-badge">4</div>
                </div>
                
                <div class="btn-badge">
                    <button class="btn icon-only-btn"><a href="../cart/cart.html"><i class="far fa-shopping-cart icon"></i></a></button>
                    <div class="real-badge">1</div>
                </div>
            </div>
        </nav>
    </div>
    <main class="form-main align-justify-center margin-30">
       
        <div class="form-container align-justify-center">

            <form action="" class="signup-form">
                <h2 class="form-head">SignUp Form</h2>
                <label for="fname" class="label-inp">Firstname*</label>
                <input type="text" class="input" id="fname" required autofocus/>
                <label for="lname" class="label-inp">Lastname</label>
                <input type="text" class="input" id="lname"/>
                <label for="email" class="label-inp">Email address*</label>
                <input type="text" class="email-id-input input" id="email" required/>
                <label for="password" class="label-inp">Password*</label>
                <input type="password" class="input" id="password" required/>
                    <label for="">
                        <input type="checkbox" id="t-c" required/>
                            I accept all the terms and conditions
                    </label>
                <div>
                    <button class="submit-btn btn primary-btn">Signup</button>
                </div>
                <button class="new-ac button read-btn"><a href="../login/login.html" class="link-style link-color-primary"> Already have an account</a></button>
            </form>
        </div>
    </main>
      </div>
    );
  };

  export {Signup};