import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>Home</div>
      },
      {
        path: "/orders",
        element: <div>orders</div>
      },
    ],
  },
]);

export default router;
