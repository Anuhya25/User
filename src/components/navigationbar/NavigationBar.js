import React from 'react'
import './NavigationBar.css'
import { NavLink } from 'react-router-dom'
import { FaUsers } from "react-icons/fa";
import { FaUsersSlash } from "react-icons/fa";

function NavigationBar() {


  const activeLink = {
    color: "#EEF0F1",
    fontSize: "1.2rem",
    fontWeight: "bold"
  };

  const inactiveLink = {
    color: "#EEF0F1",
    fontSize: "1.2rem"
  };

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link "
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink
                }} to="/users">
                <FaUsers className='user-icon' />Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink
                }} to="/removedusers">
                <FaUsersSlash className='removed-user-icon' />Removed Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default NavigationBar