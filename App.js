import { MagnifyingGlass, ShoppingCartSimple } from "@phosphor-icons/react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/svg/logo.svg";

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

const Card = ({ name, data }) => {
  return (
    <a href="#" className="card">
      <div className="card-img">
        <img src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-data">{data}</p>
      </div>
    </a>
  );
};

const Main = () => {
  return (
    <main className="main">
      <div className="responsive-wrapper">
        <div className="main-header">
          <h1>Restaurants</h1>
          <div className="search">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <MagnifyingGlass weight="bold" />
            </button>
          </div>
        </div>
        <div className="card-grid">
          <Card name="McDonalds" data="McDonalds Foods" />
          <Card name="KFC" data="KFC foods" />
          <Card name="Burger King" data="Burger King foods" />
        </div>
      </div>
    </main>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
