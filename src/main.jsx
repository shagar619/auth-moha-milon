import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import Orders from "./Orders";
import PrivateRoute from "./Route/PrivateRoute";
import Profile from "./Components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "login",
        element: <Login></Login>
      },

      {
        path: "register",
        element: <Register></Register>
      },

      {
        path: "orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },

      {
        path: "profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

