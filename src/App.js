import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import Grocery from "./components/Grocery"; (Normal Loading)
import Header from "./components/Header";
import Main from "./components/Main";
import RestaurantMenu from "./components/RestaurantMenu";

//
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="responsive-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
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
