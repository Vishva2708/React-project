import React, {useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Comp/Header";
import Footer from "./Comp/Footer";
import Signin from "./Comp/Signin";
import Login from "./Comp/Login";
import Home from "./Comp/Home";
import Category from "./Comp/Category";
import Productinfo from "./Comp/Productinfo";
import Cart from "./Comp/Cart";
import Shirt from "./Comp/Shirt";
import Checkout from "./Comp/Checkout";
import { myContext } from "./Comp/Usecontext";
import PrivateRoute from './Comp/PrivateRoute'
import Payment from "./Comp/Payment";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [showName, setShowName] = useState(null);

  useEffect(() => {
  AOS.init({
    duration: 800,
  });
}, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) setShowName(user.name);
  }, []);

  return (
    <myContext.Provider
      value={{
        search,
        setSearch,
        show,
        setShow,
        showName,
        setShowName,
      }}
    >
      {/* Header only when logged in */}
      {showName && <Header/>}
      <Routes>
        <Route path="/signin" element={<Signin setLogin={setShowName} />} />
        <Route path="/login" element={<Login setLogin={setShowName} />} />
        <Route path="/checkout" element={<PrivateRoute element={<Checkout/>}/>} />
        <Route path="/payment" element={<PrivateRoute element={<Payment/>}/>} />
        <Route path="/shirt" element={<PrivateRoute element={<Shirt/>}/>} />
        <Route path="/" element={<PrivateRoute element={<Home/>}/>} />
        <Route path="/cart" element={<PrivateRoute element={<Cart/>}/>} />
        <Route path="/category/:category" element={<PrivateRoute element={<Category/>}/>} />
        <Route path="/:category" element={<PrivateRoute element={<Category/>}/>} />
        <Route path="/category/:category/:id" element={<PrivateRoute element={<Productinfo/>}/>} />
        <Route path="/:category/:id" element={<PrivateRoute element={<Productinfo/>}/>} />
      </Routes>

      {showName && <Footer/>}
    </myContext.Provider>
  );
}

export default App;
