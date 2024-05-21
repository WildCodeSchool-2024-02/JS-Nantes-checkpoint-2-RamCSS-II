import React from "react";

import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import CupcakeList from "./pages/CupcakeList";



// const Instructions = () => {
//   return (
//     <div>
//       <h2>li</h2>
//     </div>
//   );
// };

// const CupcakesLoading = () => {
//   const [cupcakes, setCupcakes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:3310/api/cupcakes")
//       .then(response => response.json())
//       .then(data => {
//         setCupcakes(data);
//         setLoading(false);
//       });
//   }, []);

//   return <CupcakeList cupcakes={cupcakes} loading={loading} />;
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/instructions",
      //   element: <Instructions />,
      // },
      {
        path: "/cupcakes",
        element: <CupcakeList />,
        // loader: () => 
        //   fetch("http://localhost:3310/api/cupcakes"),
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
