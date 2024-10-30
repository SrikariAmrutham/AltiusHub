import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
    <>
    
    <nav className="navbar navbar-expand-lg">
      <button style={{backgroundColor:"white"}} className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTog"
                  aria-controls="navbarTog">
                  <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarTog">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <Link to="/" className="nav-link " aria-current="page" >Home</Link>
            </li>
          <li className="nav-item">
            <Link to="invoices" className="nav-link ">Invoices</Link>
            </li>
        </ul>
      </div>
    </nav>
    </>
);
}
export default Navbar
