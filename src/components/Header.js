import { ShoppingCartSimple, SignIn } from "@phosphor-icons/react";
import { useState } from "react";
import Logo from "../assets/svg/logo.svg";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  return (
    <header className="header">
      <div className="header-content responsive-wrapper">
        <div className="page-logo">
          <a href="/">
            <div>
              <img src={Logo} />
            </div>
            <div className="page-title">Food App</div>
          </a>
        </div>
        <div className="header-navigation">
          <div className="header-navigation-left-links"></div>
          <div className="header-navigation-right-links">
            <a href="#"> Home </a>
            <a href="#"> About Us </a>
            <a href="#"> Contact Us </a>
            <a href="#" className="header-button">
              <ShoppingCartSimple weight="bold" />
              <span className="header-button-tag">Cart</span>
            </a>
            <a
              href="#"
              className="header-button"
              onClick={() => {
                if (buttonName === "Login") setButtonName("Logout");
                else setButtonName("Login");
              }}
            >
              <SignIn weight="bold" />
              <span className="header-button-tag">{buttonName}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
