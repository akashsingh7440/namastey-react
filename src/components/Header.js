import { useState, useEffect } from "react";
import { LOGO_URL } from "../utility/constants";
import { Link } from "react-router";

const HeaderComponent = () => {
  // let btnName = "Login";
  const [btnName, seBtnName] = useState("Login");

  //No dependency array
  useEffect(() => {
    console.log("Header UseEffect with no dependency called.");
  });

  //Empty dependency array
  useEffect(() => {
    console.log("Header UseEffect with Empty dependency array called.");
  }, []);

  //State variable pass in dependecy array - btnName
  useEffect(() => {
    console.log(
      "Header UseEffect with state variable passes in dependency array called."
    );
  }, [btnName]);

  return (
    <div className="header-container">
      <div className="image-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items-container">
        <ul>
          <Link className="link-class" to="/">
            Home
          </Link>
          <Link className="link-class" to="/about">
            About Us
          </Link>
          <Link className="link-class" to="/contact">
            Contact
          </Link>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login" ? seBtnName("Logout") : seBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
