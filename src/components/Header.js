import { LOGO_URL } from "../utility/constants";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="image-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items-container">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
