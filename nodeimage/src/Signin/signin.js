
import "./signin.css";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ email: "", password: "" });
    const signIn = async ()=>{
       
        //API call to to register a user 
        let user = await axios.post(`${process.env.REACT_APP_API_URL}/app/login`, userData);
        console.log("user",user.data.user)
        if(user?.data?.user){
            localStorage.setItem("user",JSON.stringify(user.data.user))
            navigate("/")
        }
        else{
            alert("Incorrect UserName or Password")
        }
     
        
        
    }
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
                    <img src="https://i.postimg.cc/Y05gjC6C/Screenshot-2023-01-26-21-07-44.png" class="logo" onClick={() => navigate("/")}/>
                </div>
                <header class="header">Log in</header>
                <header class="subHeader">Welcome to <b>POSH SHOP!</b> Please Enter your Details</header>

                    <div class="inputContainer">
                        <label class="label" for="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" class="labelIcon"/><span>Email
                                Address*</span></label>
                        <input type="email" class="input" id="emailAddress" placeholder="Enter your Email Address" onChange={(evt)=>setUserData({...userData,email:evt.target.value})}/>
                    </div>
                    <div class="inputContainer">
                        <label class="label" for="emailAddress"><img src="https://i.imgur.com/g5SvdfG.png"
                                class="labelIcon"/><span>Password*</span></label>
                        <input type="password" class="input" id="emailAddress" placeholder="Enter your Password" onChange={(evt)=>setUserData({...userData,password:evt.target.value})}/>
                    </div>
                    <div class="OptionsContainer">
                        <div class="checkboxContainer">
                            <input type="checkbox" id="RememberMe" class="checkbox"/> <label for="RememberMe">Remember
                                me</label>
                        </div>
                        <a href="#" class="ForgotPasswordLink">Forgot Password?</a>
                    </div>
                    <button class="LoginButton" onClick={() => signIn()}>Login</button>
                    <button class="LoginButton"  onClick={() => navigate("/Signup")}>Sign Up</button>
                
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default Signin;
