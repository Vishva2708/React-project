import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useSelector((store) => store); 

  // Logged-in user (for email validation)
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

  const [form, setForm] = useState({
    pincode: "",
    city: "",
    state: "",
    flat: "",
    area: "",
    name: "",
    email: loggedInUser?.email || "",
    addressType: "Home",
    paymentMethod: "cod",
    paymentNumber: "",
    note: "",
  });

  const [emailError, setEmailError] = useState("");
  const [paymentError, setPaymentError] = useState("");

  // Load saved data (optional)
  useEffect(() => {
    const savedForm = localStorage.getItem("checkoutData");
    if (savedForm) setForm(JSON.parse(savedForm));
  }, []);

  // Save whenever form changes
  useEffect(() => {
    localStorage.setItem("checkoutData", JSON.stringify(form));
  }, [form]);

  // Handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Email validation
  const validateEmail = () => {
    if (!loggedInUser) {
      setEmailError("Please login first.");
      return false;
    }
    if (form.email.trim() !== loggedInUser.email) {
      setEmailError("Email does not match logged-in user.");
      return false;
    }
    setEmailError("");
    return true;
  };

  // Payment validation
  const validatePayment = () => {
    if (form.paymentMethod === "card") {
      if (!/^\d{16}$/.test(form.paymentNumber)) {
        setPaymentError("Please enter a valid 16-digit card number.");
        return false;
      }
    } else if (form.paymentMethod === "netbanking") {
      if (!/^\d{10,}$/.test(form.paymentNumber)) {
        setPaymentError("Net banking account number must be at least 10 digits.");
        return false;
      }
    }
    setPaymentError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic field validation
    if (
      !form.pincode ||
      !form.city ||
      !form.state ||
      !form.flat ||
      !form.area ||
      !form.name ||
      !form.email
    ) {
      alert("Please fill all required fields!");
      return;
    }

    if (!validateEmail()) return;

    if (form.paymentMethod !== "cod" && !validatePayment()) return;

    alert("Order placed successfully ✅");

    // Navigate to payment page
    navigate("/payment", { state: { form, cart } });
  };

  return (
    <div
      className="container mt-4 mb-5"
      style={{ maxWidth: "600px", marginTop: "50px" }}
    >
      <h4 className="mb-3 text-center" style={{ marginTop: "100px" }}>
        Add Delivery Address
      </h4>

      <form onSubmit={handleSubmit}>
        {/* Pincode */}
        <input
          type="text"
          name="pincode"
          className="form-control mb-3"
          placeholder="Pincode *"
          value={form.pincode}
          onChange={handleChange}
        />

        {/* City & State */}
        <div className="d-flex gap-3 mb-3">
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="City *"
            value={form.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            className="form-control"
            placeholder="State *"
            value={form.state}
            onChange={handleChange}
          />
        </div>

        {/* Address fields */}
        <input
          type="text"
          name="flat"
          className="form-control mb-3"
          placeholder="Flat, House no. *"
          value={form.flat}
          onChange={handleChange}
        />
        <input
          type="text"
          name="area"
          className="form-control mb-4"
          placeholder="Apartment, Area, Sector, Village *"
          value={form.area}
          onChange={handleChange}
        />

        {/* Customer info */}
        <h5 className="mb-3">Customer Information</h5>
        <input
          type="text"
          name="name"
          className="form-control mb-3"
          placeholder="Full Name *"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="form-control mb-2"
          placeholder="Email Address *"
          value={form.email}
          onChange={handleChange}
          style={{
            border: emailError ? "1px solid red" : "1px solid #ced4da",
          }}
        />
        {emailError && (
          <p style={{ color: "red", fontSize: "13px" }}>{emailError}</p>
        )}

        {/* Address Type */}
        <h6 className="mt-4">Save Address As</h6>
        <div className="d-flex gap-3 mb-4">
          <button
            type="button"
            className={`btn ${
              form.addressType === "Home" ? "btn-dark" : "btn-outline-secondary"
            }`}
            onClick={() => setForm({ ...form, addressType: "Home" })}
          >
            Home
          </button>
          <button
            type="button"
            className={`btn ${
              form.addressType === "Work" ? "btn-dark" : "btn-outline-secondary"
            }`}
            onClick={() => setForm({ ...form, addressType: "Work" })}
          >
            Work
          </button>
        </div>

        {/* Payment Options */}
        <h5>Payment Options</h5>
        <label className="d-block mb-2">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={form.paymentMethod === "cod"}
            onChange={handleChange}
            className="me-2"
          />
          Cash on Delivery
        </label>
        <label className="d-block mb-2">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={form.paymentMethod === "card"}
            onChange={handleChange}
            className="me-2"
          />
          Card Payment
        </label>
        <label className="d-block mb-2">
          <input
            type="radio"
            name="paymentMethod"
            value="netbanking"
            checked={form.paymentMethod === "netbanking"}
            onChange={handleChange}
            className="me-2"
          />
          Net Banking
        </label>

        {form.paymentMethod !== "cod" && (
          <>
            <input
              type="text"
              name="paymentNumber"
              placeholder={
                form.paymentMethod === "card"
                  ? "Enter 16-digit card number"
                  : "Enter net banking account number"
              }
              value={form.paymentNumber}
              onChange={handleChange}
              className="form-control mb-2"
              style={{
                border: paymentError ? "1px solid red" : "1px solid #ced4da",
              }}
            />
            {paymentError && (
              <p style={{ color: "red", fontSize: "13px" }}>{paymentError}</p>
            )}
          </>
        )}

        {/* Note */}
        <label className="mt-4">Add a note to your order</label>
        <textarea
          name="note"
          value={form.note}
          onChange={handleChange}
          placeholder="Type your note here..."
          className="form-control mb-4"
        ></textarea>

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate("/Cart")}
          >
            ← Return to Cart
          </button>
          <button type="submit" className="btn btn-dark px-4">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
