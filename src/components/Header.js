import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Header() {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <header className="inset-x-0 top-0 shadow-sm bg-white">
      <nav className="max-w-7xl m-auto flex flex-row py-6 px-4 content-center justify-center">
        <div className="flex flex-1">
          <Link to="/" className="flex-row -m-1.5 p-1.5">
            <div className="flex flex-row items-center">
              <img className="h-8 w-auto" src={Logo} alt="" />
              <div className="text-3xl font-bold text-black sm:text-2x ml-2">
                Food App
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden gap-x-12 md:flex content-center justify-center">
          <Link
            to="/"
            className="self-center rounded-md text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="self-center rounded-sm text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="self-center rounded-sm text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
          >
            Contact
          </Link>
          <Link
            to="/grocery"
            className="self-center rounded-sm text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
          >
            Grocery
          </Link>
        </div>
        <div className="flex flex-1 justify-end content-center">
          <div className="rounded-md text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black mr-4 self-center">
            <span>Online status: {onlineStatus ? "🟢" : "🔴"}</span>
          </div>
          <Link
            to="/"
            className="rounded-md text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black self-center"
            onClick={() => {
              if (buttonName === "Login") setButtonName("Logout");
              else setButtonName("Login");
            }}
          >
            {buttonName} <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            to="/"
            className="self-center rounded-sm text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black ml-4"
          >
            {loggedInUser}
          </Link>
        </div>
      </nav>
    </header>
  );
}
