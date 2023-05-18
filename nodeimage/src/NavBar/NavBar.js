import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./navbar.css";

const NavBar = ({isLogged,user}) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function removeItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }


console.log(JSON.stringify(user))

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav class="nav">
      <div class="nav-main">
        <img
          class="img1"
          src="https://i.postimg.cc/Y05gjC6C/Screenshot-2023-01-26-21-07-44.png" onClick={() => navigate("/")}
          />
        <ul class="nav-links">
          <li class="nav-link">
            <a class="posh" href="" onClick={() => navigate("/")}>
              {" "}
              Home{" "}
            </a>
          </li>
          <li class="nav-link">
            <a href=""   onClick={() => navigate("/Admin")}> Admin</a>
          </li>
          {/* <li class="nav-link">
            <a href=""   onClick={() => navigate("/Payment")}> Payment</a>
          </li> */}
        </ul>
      </div>
    
      <div className="cta">
      <Button variant="primary" onClick={handleShow}>
        Cart
      </Button>
      {
        !isLogged && <Button variant="primary" onClick={() => navigate("/Signin")}>
        sign in 
      </Button>
      }
       {
        isLogged && <div>{user.userName}</div>
      }
      
      
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </nav>
  );
};
export default NavBar;
