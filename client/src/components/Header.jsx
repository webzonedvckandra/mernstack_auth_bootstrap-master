import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/AuthSlice";

export default function Header() {
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          WEB ZONE
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {user?.result?._id && (
              <>
                <li>
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              </>
            )}

            <li>
            {user?.result?._id && (

              <span className="nav-link" style={{ color:"#43bf64",fontWeight:800 }}>welcome : {user?.result?.name}</span>
            )}
            </li>
            {user?.result?._id ? (
            <li>

                <Link className="nav-link" to="/login">
                  <span className="header-text" onClick={handleLogout}>
                    Logout
                  </span>
                </Link>
            </li>
             
            ) : (

            <li>

                <Link className="nav-link" to="/login">
                  <span className="header-text">Login</span>
                </Link>
            </li>
             

            )}
          </ul>
        </div>
      </nav>

     
    </>
  );
}
