import NavBar from "../NavBar/NavBar";
import "./admin.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Admin = () => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [image, setImage] = useState([]);
  useEffect(() => {
    addImage();
  }, []);
  
  const addImage = () => {
    let body = {
      name: selectedName,
      url: selectedImageUrl,
      pri: selectedPrice,
    };
    axios
      .post("http://localhost:5000/app/addImage", body)
   
      .then(function (response) {
        console.log(response);
     
      });
  };
  return (
    <div>
      <NavBar />
      

      <div class="login-box">
        <h2>ADD</h2>
        <form>
          <div class="user-box">
            <input
              type="text"
              name=""
              required=""
              onChange={(evt) => setSelectedName(evt.target.value)}
            />
            <label>Name</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              name=""
              required=""
              onChange={(evt) => setSelectedImageUrl(evt.target.value)}
            />
            <label>ImageUrl</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              name=""
              required=""
              onChange={(evt) => setSelectedPrice(evt.target.value)}
            />
            <label>Price</label>
          </div>
          <a href="#" onClick={() => addImage()}>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default Admin;
