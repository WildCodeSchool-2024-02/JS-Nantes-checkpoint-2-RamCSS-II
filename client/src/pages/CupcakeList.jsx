// import { useLoaderData } from "react-router-dom";
// import Cupcake from "../components/Cupcake";
// import { useEffect, useState } from "react";

// /* ************************************************************************* */
// const someCupcakes = [];
// someCupcakes.push(
//   {
//     id: 10,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "blue",
//     color2: "white",
//     color3: "red",
//     name: "France",
//   },
//   {
//     id: 11,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "yellow",
//     color2: "red",
//     color3: "black",
//     name: "Germany",
//   },
//   {
//     id: 27,
//     accessory_id: "5",
//     accessory: "christmas-candy",
//     color1: "yellow",
//     color2: "blue",
//     color3: "blue",
//     name: "Sweden",
//   }
// );

// /* you can use someCupcakes if you're stucked on step 1 */
// /* if you're fine with step 1, just ignore this ;) */
// /* ************************************************************************* */

// function CupcakeList() {
//   const [accessories, setAccessories] = useState([]);
//   const [selectedAccessory, setSelectedAccessory] = useState("");
//   // const [cupcakes, setCupcakes] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3310/api/cupcakes")
//       .then((response) => response.json())
//       .then((data) => {
//         setAccessories(data);
//         console.info("Accessories Data:", data);
//       })
//       .catch((error) =>
//         console.error("Erreur lors de la récupération des accessoires:", error)
//       );

//   }, []);

//   const filteredCupcakes = selectedAccessory
//     ? cupcakes.filter((cupcake) => cupcake.accessory_id === selectedAccessory)
//     : cupcakes;

//   return (
//     <>
//       <h1>My cupcakes</h1>
//       <form className="center">
//         <label htmlFor="cupcake-select">
//           Filter by{" "}
//           <select
//             id="cupcake-select"
//             value={selectedAccessory}
//             onChange={(e) => setSelectedAccessory(e.target.value)}
//           >
//             <option value="">---</option>
//             {accessories.map((accessory) => (
//               <option key={accessory.id} value={accessory.id}>
//                 {accessory.name}
//               </option>
//             ))}
//           </select>
//         </label>
//       </form>
//       <ul className="cupcake-list" id="cupcake-list">
//         {filteredCupcakes.map((cupcake) => (
//           <li key={cupcake.id} className="cupcake-item">
//             <Cupcake cupcake={cupcake} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default CupcakeList;
