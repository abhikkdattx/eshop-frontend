import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const Navbar = () => {
  const navigate = useNavigate();

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if(!token){
      setIsLoggedIn(false);
    }else{
      setIsLoggedIn(true);
    }
  }, [isLoggedIn])

  const onLogoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-2" to="/login">
          Eshop
        </Link>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav w-100 d-flex justify-content-around">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          {
            !isLoggedIn ? <Link className='btn btn-primary' to={'/login'}>Login</Link> : <button className="btn btn-danger" onClick={onLogoutHandler}>Logout</button>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
