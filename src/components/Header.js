import { ShoppingCartSimple } from "@phosphor-icons/react";
import Logo from "../assets/svg/logo.svg";

const Header = () => {
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
