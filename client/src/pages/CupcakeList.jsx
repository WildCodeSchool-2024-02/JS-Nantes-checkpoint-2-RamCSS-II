/* import { useLoaderData } from "react-router-dom"; */
import { useState, useEffect } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
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

/* you can use someCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState([]);
  const [filter, setFilter] = useState("");
  const [accessories, setAccessories] = useState([]);

useEffect(() => {
  

    fetch("http://localhost:3310/api/cupcakes")
        .then(response => response.json())
        .then(data => {
            setCupcakes(data);
        })



    fetch("http://localhost:3310/api/accessories")
        .then(response => response.json())
        .then(data => {setAccessories(data)})
}, []);



/* permet defiltrer ****filter : true****** je pense que c'est pour lui doner une condition true j'ai recuperer ce code greenDoor */
const filteredCupcakes = cupcakes.filter(cupcake =>
  filter ? cupcake.accessory_id === filter : true
);




  
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
      
          Filter by{" "}
          {/* event se met barrer je ne comprends pas mais la docu m'a dit qu'on peut mettre e */}  
          <select id="cupcake-select" value={filter} onChange={e  => setFilter(e.target.value)}>
            
            <option value="">---</option>



            {accessories.map(accessory => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>



            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">



      {filteredCupcakes.map(cupcake => (
          <li 
          key={cupcake.id}
          className="cupcake-item"
          >
            <Cupcake cupcake={cupcake} />
          </li>
        ))}

        
      </ul>
    </>
  );
}

export default CupcakeList;
