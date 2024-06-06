import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
// import Login from "./pages/OldLogin";
import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    
    path: "/alexmota-dev.github.io",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
        <Link to="login">Login</Link>

      </div>
    ),
  },
  {
    path: "/about",
    element: <div>About Us</div>,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Login />
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
} else {
  // Trate o caso em que o elemento "root" não é encontrado
  console.error('Elemento com ID "root" não foi encontrado.');
}