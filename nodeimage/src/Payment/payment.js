import axios from "axios";
import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";
const Payment = () => {

    const [payments, setPayments] = useState([]);
useEffect(() => {
    getAllPayment();
  }, []);

  const getAllPayment = () => {
    axios.get("http://localhost:5000/app/getPayments").then(function (response) {
      console.log(response);
      setPayments(response.data.Payments);
    });
  };
  return (
    <div>
        <NavBar/>
    <div>
        <div>

        <h5>All Payments</h5>
        </div>
   
    <table>
      <thead>
        <tr>
          <th>Payment Email</th>
          <th>Payment Name</th>
          <th>Payment ID</th>
          {/* add any other relevant columns here */}
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <tr key={payment.id}>
            <td>{payment.Email}</td>
            <td>{payment.Username}</td>
            <td>{payment.PaymentID}</td>
            {/* add any other relevant columns here */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  );
};

export default Payment;
