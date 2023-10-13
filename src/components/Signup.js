import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    dispatch(addUser(formData));
    setFormData({
      email: "",
      name: "",
      password: "",
    });
    toast.success("Successfully Sign up!");
    console.log("User registered:", formData);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#F5F5F5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ width: "310px", background: "#F6FBF9", borderRadius: "10px" }}
      >
        <h2 style={{ margin: "20px" }}>Signup</h2>
        <form style={{ padding: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                padding: "5px",
                outline: "none",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                padding: "5px",
                outline: "none",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={{
                padding: "5px",
                outline: "none",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            />
          </div>
          <button
            type="button"
            style={{
              marginTop: "20px",
              height: "30px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              background: "#84C7AE",
              border: "none",
              cursor: "pointer",
              color: "#FFF",
            }}
            onClick={handleSignup}
          >
            Signup
          </button>
        </form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>
            Already Have An Account? <Link to={"/login"}>LogIn</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
