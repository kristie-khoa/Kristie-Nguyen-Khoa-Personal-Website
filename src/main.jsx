import React from "react";
import "./index.css";
import Home from "./Routes/Home.jsx";
import About from "./Routes/About.jsx";
import Projects from "./Routes/Projects.jsx";
import Contact from "./Routes/Contact.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Kristie-Nguyen-Khoa-Personal-Website/",
        element: <Home />,
      },
      {
        path: "/Kristie-Nguyen-Khoa-Personal-Website/about",
        element: <About />,
      },
      {
        path: "/Kristie-Nguyen-Khoa-Personal-Website/projects",
        element: <Projects />,
      },
      {
        path: "/Kristie-Nguyen-Khoa-Personal-Website/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
