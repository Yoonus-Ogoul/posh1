
import "./signin.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();
  return (
    <div>
      
      
      <div class="LoginPageContainer">
    <div class="LoginPageInnerContainer">
        <div class="ImageContianer">
            <img src="https://i.imgur.com/MYZd7of.png" class="GroupImage"/>
        </div>
        <div class="LoginFormContainer">
            <div class="LoginFormInnerContainer">
                <div class="LogoContainer">
                    <img src="https://i.postimg.cc/Y05gjC6C/Screenshot-2023-01-26-21-07-44.png" class="logo" onClick={() => navigate("/Home")}/>
                </div>
                <header class="header">Log in</header>
                <header class="subHeader">Welcome to <b>POSH SHOP!</b> Please Enter your Details</header>

                <form>
                    <div class="inputContainer">
                        <label class="label" for="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" class="labelIcon"/><span>Email
                                Address*</span></label>
                        <input type="email" class="input" id="emailAddress" placeholder="Enter your Email Address"/>
                    </div>
                    <div class="inputContainer">
                        <label class="label" for="emailAddress"><img src="https://i.imgur.com/g5SvdfG.png"
                                class="labelIcon"/><span>Password*</span></label>
                        <input type="password" class="input" id="emailAddress" placeholder="Enter your Password"/>
                    </div>
                    <div class="OptionsContainer">
                        <div class="checkboxContainer">
                            <input type="checkbox" id="RememberMe" class="checkbox"/> <label for="RememberMe">Remember
                                me</label>
                        </div>
                        <a href="#" class="ForgotPasswordLink">Forgot Password?</a>
                    </div>
                    <button class="LoginButton">Login</button>
                    <button class="LoginButton"  onClick={() => navigate("/Signup")}>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default Signin;
