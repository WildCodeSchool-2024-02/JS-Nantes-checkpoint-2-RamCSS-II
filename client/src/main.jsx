import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import CupcakeList from "./pages/CupcakeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/cupcakes",
        element: <CupcakeList />,
        // Step 1: load data here

        loader: async () => {
          const response = await fetch('http://localhost:3310/api/cupcakes')
          return defer({
            results: response.json()
          })
        }
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
