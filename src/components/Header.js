import { ShoppingCartSimple, SignIn } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  return (
    <header className="header">
      <div className="header-content responsive-wrapper">
        <div className="page-logo">
          <Link to="/">
            <div>
              <img src={Logo} />
            </div>
            <div className="page-title">Food App</div>
          </Link>
        </div>
        <div className="header-navigation">
          <div className="header-navigation-left-links"></div>
          <div className="header-navigation-right-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/" className="header-button">
              <ShoppingCartSimple weight="bold" />
              <span className="header-button-tag">Cart</span>
            </Link>
            <Link
              to="/"
              className="header-button"
              onClick={() => {
                if (buttonName === "Login") setButtonName("Logout");
                else setButtonName("Login");
              }}
            >
              <SignIn weight="bold" />
              <span className="header-button-tag">{buttonName}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
