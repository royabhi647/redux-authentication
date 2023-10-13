import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.user.userList);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const { email, password } = formData;

    const user = userList.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      dispatch(loginUser(user));
      console.log("User logged in:", user);
      setFormData({
        email: "",
        password: "",
      });
      toast.success("Successfully LoggedIn!");
      navigate("/home");
    } else {
      toast.error("User not found!");
    }
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
        <h2 style={{ margin: "20px" }}>Login</h2>
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
            onClick={handleLogin}
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
          >
            Login
          </button>
        </form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>
            Don't Have An Account? <Link to={"/"}>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
