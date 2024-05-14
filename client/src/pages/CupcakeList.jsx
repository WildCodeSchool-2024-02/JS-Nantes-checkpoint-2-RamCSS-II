import { useLoaderData } from "react-router-dom";
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

// /* you can use someCupcakes if you're stucked on step 1 */
// /* if you're fine with step 1, just ignore this ;) */
// /* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes

  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3310/api/cupcakes')
      .then((res) =>  
        res.json() 
      )
      .then((data) => {
        console.info(data);
        setCupcakes(data);
      });
  }, []);

  // J'AI UN PEU GALERER A RECUPERER LES DONNEES DE MON FETCH
  console.info("STEP1", useLoaderData());

  // Step 3: get all accessories

  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch('http://localhost:3310/api/accessories');
        const data = await response.json();
        setAccessories(data);
        console.info('Accessories:', data);
      } catch (error) {
        console.error('Error fetching accessories:', error);
      }
    };
    fetchAccessories();
  }, []);

  console.info(accessories)

  // Step 5: create filter state

  const [currentAccessory, setCurrentAccessory] = useState("");

  const selectAccessory = (e) => {
    if (e.target.value === "") {
      setCurrentAccessory("")
    }
    else {
      setCurrentAccessory(e.target.value)
    }
  }

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={selectAccessory}>
            <option value="" selected disabled>--- choose accessory ---</option>

            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option value={accessory.slug} key={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}

        {cupcakes
          .filter((cupcakeData) => cupcakeData.accessory.includes({currentAccessory}))
          .map((cupcakeData) => (
            <Cupcake
              key={cupcakeData.id}
              accessory_id={cupcakeData.accessory_id}
            />
          ))}

        {/* Step 5: filter cupcakes before repeating */}
        {/* <li className="cupcake-item">
          <Cupcake />
        </li> */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
