import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home/Home";

import LogRe from "../pages/Login/LogRe";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <LogRe />
      }
    ]
  },
]);
