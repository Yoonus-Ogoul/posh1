import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";

import Modal from "react-bootstrap/Modal";
import NavBar from "../NavBar/NavBar";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Home() {
 ;
 const [price, setPrice] = useState([]);
  const [image, setImage] = useState([]);
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
   
  });

  useEffect(() => {
    getAllImages();

    setUser(JSON.parse(localStorage.getItem("user")))
    if(localStorage.getItem("user"))
    setIsLogged(true)
    
  }, []);

  const getAllImages = () => {
    axios.get("http://localhost:5000/app/getImages").then(function (response) {
      console.log(response);
      setImage(response.data.images);
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("userDetails", userDetails);

  return (
    <div className="">
     <NavBar isLogged={isLogged} user={user}/>
     
      {image.map((image) => (
        <div class="productRow cf">
          <div class="shoesContainer">
            <div class="shoesPhoto">
              <img className="img" src={image.url} />
            </div>
            <div class="shoesInfo">
              <h3>{image.name}</h3>
              
              <span>
                 {image.description}<i class="fa fa-tags"></i>
              </span>
              <p class="price">
                ${image.pri}
              </p>
              <button className="buy" onClick={()=>{
                handleShow();
                setPrice(image.pri);
              }}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Title>
          <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png" />
        </Modal.Title>
        <form class="form">
          <div class="form__group">
            <input
              type="text"
              placeholder="Username"
              class="form__input"
              onChange={(evt) =>
                setUserDetails({ ...userDetails, name: evt.target.value })
              }
            />
          </div>

          <div class="form__group">
            <input
              type="email"
              placeholder="Email"
              class="form__input"
              onChange={(evt) =>
                setUserDetails({ ...userDetails, email: evt.target.value })
              }
            />
          </div>

          <div class="form__group">
            <input
              type="text"
              placeholder="Address"
              class="form__input"
              onChange={(evt) =>
                setUserDetails({ ...userDetails, address: evt.target.value })
              }
            />
          </div>
        </form>
        {userDetails.name && userDetails.address && userDetails.email && (
          <PayPalScriptProvider
            options={{
              "client-id":
                "AUUtSeTSUrLlHMZUy-8fJmNGpwkQ81eA4K8C0wTwbjvsPObgnRrEyXEAn0YY5G65L_umkpxpCA4kFlca",
            }}
          >
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value : price
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  console.log("details",details)
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
                  // console.log("herer ")
                  let body = {
                    Username: userDetails.name,
                    Email: userDetails.email,
                    Address: userDetails.address,
                    PaymentID : details.id,
                
                    
                  };
                  console.log("herer ", userDetails);
                  axios
                    .post("http://localhost:5000/app/addPayment", body)
                    // .then((response) => getAllUsers())
                    .then((response) => {
                      
                      console.log(response);
                      
                    });
                    axios
                      .get("http://localhost:5000/app/sendMail")
                      .then((response) => {
                      
                        console.log(response);
                        
                      })
                  //backend call to store user information with payment id
                });
              }}
            />
          </PayPalScriptProvider>
        )}
      </Modal>
    </div>
  );
}

export default Home;
