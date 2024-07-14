import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import WorksPage from "./pages/WorksPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { data } from "./db.js";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    loader: () => data,
    id: "app",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/works",
        element: <WorksPage />,
      },
      {
        path: "/works/:id",
        element: <WorkPage />,
      },
      {
        path: "/info",
        element: <InfoPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
