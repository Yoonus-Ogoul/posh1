// App.js
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin/admin';
import Home from './Home/home';
import Signin from './Signin/signin';
import Signup from './Signup/signup';
import Payment from './Payment/payment';



const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Signin" element={<Signin />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Payment" element={<Payment />}/>
       </Routes>
    </>
 );
};

export default App;