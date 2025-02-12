
import "./signup.css";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ email: "", password: "",phone : "",userName:"" });


    const register = async ()=>{

        //API call to to register a user 
        let register = await axios.post(`${process.env.REACT_APP_API_URL}/app/addUser`, userData);
        
        console.log("register",register)
        if(register && register.data){
            alert("User is created")
            navigate("/signIn")
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
                    <img src="https://i.postimg.cc/Y05gjC6C/Screenshot-2023-01-26-21-07-44.png" class="logo" onClick={() => navigate("/Home")}/>
                </div>
                <header class="header">Sign Up</header>
                <header class="subHeader">Welcome to <b>POSH SHOP!</b> Please Enter your Details</header>

                {/* <form> */}
                <div class="inputContainer">
                        <label class="label" for="emailAddress"><img src="https://static.thenounproject.com/png/2191156-200.png" class="labelIcon"/><span>Username
                                *</span></label>
                        <input type="text" class="input" id="emailAddress" placeholder="Enter your Username" onChange={(evt)=>setUserData({...userData,userName:evt.target.value})}/>
                    </div>
                    <div class="inputContainer">
                        <label class="label" for="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" class="labelIcon"/><span>Email
                                Address*</span></label>
                        <input type="email" class="input" id="emailAddress" placeholder="Enter your Email Address" onChange={(evt)=>setUserData({...userData,email:evt.target.value})}/>
                    </div>
                    <div class="inputContainer">
                        <label class="label" for="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" class="labelIcon"/><span>Phone Number
                                *</span></label>
                        <input type="number" class="input" id="emailAddress" placeholder="Enter your Phone Number" onChange={(evt)=>setUserData({...userData,phone:evt.target.value})}/>
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
                        
                    </div>
                 
                    <button class="LoginButton" onClick={()=>register()} >Sign Up</button>
                {/* </form> */}
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default Signup;
