import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/Books/CartPage";
import Checkout from "../pages/Books/Checkout";
import SingleBook from "../pages/Books/SingleBook";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/orders",
        element: <p>Orders</p>,
      },
      {
        path: "/about",
        element: <p>About</p>,
      },
       {
        path: "/login",
        element: <Login></Login>,
      },
       {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>
      },
       {
        path: "/checkout",
        element: <Checkout></Checkout>
      },
      {
        path: "/books/:id", 
        element: <SingleBook></SingleBook>
      }
    ],
  },
]);

export default router;
