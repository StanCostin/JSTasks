import React from "react";
import { useHistory } from 'react-router';
import { Link, NavLink } from "react-router-dom"; 

const Navbar = () => {

  const history = useHistory();
  const loggedOut = () => {
    localStorage.clear();
    window.alert('LogOut succesfully!');
    history.push('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/Home">AQUASoft</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" exact to="/Home">Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <a onClick={loggedOut} className="nav-link">LogOut</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;