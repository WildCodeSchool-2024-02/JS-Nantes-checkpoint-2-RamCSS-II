import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import CupcakeList from "./pages/CupcakeList";

// ----------
// Récupération des données avec Fecth qui ne fonctionne pas 
// ----------
// function loadData (){
//   fetch("http://localhost:3310/api/cupcakes")
//   .then((response) => {
//     if(!response.ok){
//       throw new Error(`Nouvelle Erreur : status ${response.statut}`)
//     }
//     response.json();
//   })
//   .then((data) => {
//     return data;
//   })
//   .catch((error) => console.error("il y a un probleme avec le fecth", error)
// )
// }

// ----------
// Récupération des données avec async qui  fonctionne 
// ----------
const loadData = async () => {
  const response = await fetch('http://localhost:3310/api/cupcakes');
  return  response.json();
};

// async function loadData() {
//   const response = await fetch("http://localhost:3310/api/cupcakes");
//   const cupcakes = await response.json();
//   return cupcakes;
// }


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
        loader: () => loadData(),
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
