import { useState, useEffect } from "react";
import { LOGO_URL } from "../utility/constants";
import { Link } from "react-router";

const HeaderComponent = () => {
  // let btnName = "Login";
  const [btnName, seBtnName] = useState("Login");

  return (
    <div className="flex justify-between bg-[#F3F2EC]">
      <div className="w-28">
        <img src={LOGO_URL} className="" />
      </div>
      <div className="my-10">
        <ul>
          <Link className="mx-2.5" to="/">
            Home
          </Link>
          <Link className="m-2.5" to="/about">
            About Us
          </Link>
          <Link className="m-2.5" to="/contact">
            Contact
          </Link>
          <Link className="m-2.5">
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login" ? seBtnName("Logout") : seBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
