import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const PF = "http://localhost:5000/images/";

  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".nav-link");
    for (var x = 0; x < links.length; x++) {
      links[x].onclick = function () {
        document.querySelector("button.navbar-toggler").click();
      };
    }
  });
  return (
    <nav className="navbar navbar-expand-lg  sticky-top">
      <div className="container">
        <span className="navbar-brand" href="#">
          LOGO
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {user ? (
            <div className="profPic">
              <img className="topImg" src={PF + user.profilePic} alt="" />
              <i className="fa-solid fa-caret-down"></i>
            </div>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="links navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/write">
                Write
              </Link>
            </li>
            {user && (
              <li className="nav-item" onClick={handleLogout}>
                <span className="nav-link">logout </span>
              </li>
            )}
          </ul>

          {user ? (
            <ul className="navbar-nav ms-auto img-ul">
              <Link to="/settings" className="img">
                <img className="topImg" src={PF + user.profilePic} alt="" />
              </Link>
              <li className="nav-item setting">
                <Link className="nav-link " to="/settings">
                  Settings
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link " to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
