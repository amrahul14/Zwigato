import React from "react";
import { Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import { useState } from "react";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

function Navbar() {
  

  const [cartView , setCartView] = useState(false);
  let data = useCart();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div style={{ height: "80px" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            ZwiGaTo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5  "
                    aria-current="page"
                    to="/"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-info mx-1 " to="/login">
                  Login
                </Link>
                <Link className="btn bg-white text-info mx-1" to="/createuser">
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div className="btn bg-danger text-white fw-bold mx-2" onClick={()=>{
                  setCartView(true)
                }}>My Cart {" "}
                  <Badge pill bg="info" >{data.length}</Badge>
                </div>
                {cartView ? <Modal onClose={()=>setCartView(false)}><Cart/></Modal> : null}
                <div
                  className="btn bg-danger text-white fs-6 fw-bold mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
