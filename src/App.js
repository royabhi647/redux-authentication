import React from "react";
import Signup from "./components/Signup";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
