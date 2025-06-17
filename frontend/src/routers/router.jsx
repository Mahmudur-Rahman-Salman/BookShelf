import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

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
    ],
  },
]);

export default router;
