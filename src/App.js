import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import Grocery from "./components/Grocery"; (Normal Loading)
import { Provider } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";

// Lazy loading
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [username, setUsername] = useState(" ");

  useEffect(() => {
    setUsername("AshhadFromAPI");
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="bg-white">
          <Header />
          <div className="max-w-7xl m-auto p-4">
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              // Loading JSX till js is loading
              <div>
                <h1>Loading grocery component...</h1>
              </div>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
