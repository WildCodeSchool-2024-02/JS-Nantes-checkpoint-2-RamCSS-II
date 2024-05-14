import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
const someCupcakes = [];
someCupcakes.push(
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  }
);

/* you can use someCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // {id} was in parameter of CupcakeList function but removed for eslint
  const data = useLoaderData();
  // Step 1: get all cupcakes
  console.info("API cupckaes", data);

  // Step 3: get all accessories
  // const [accessory, setAccessory] = useState([])

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
    .then((response) => response.json())
    .then((accessoires) => console.info("API accessoires", accessoires))
  }, [])


  const options = ["cherry", "donut", "chocolate", "wild", "christmas-candy"]

    // Step 5: create filter state
  const [filter, setFilter] = useState("");

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" value={filter} onChange={(event) => {
            setFilter(event.target.value)
          }}>
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {options.map((option) => (
                <option key={option}>
                  {option}
                </option>
            ))}
          </select>
        </label>
      </form>
      {/* <Link to={`/cupcakes/${id}`} > */} 
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        <p>Option selected is {filter}</p>
        {data
        // .accessory.filter((item) => (
        //   item.data.includes(filter)
        // ))        
        .map((item) => (
          <li key={item.id} className="cupcake-item">
            <Cupcake data={item} filter={filter} />
          </li>
        ))}
        {/* end of block */}
      </ul>
      {/* </Link> */}
    </>
  );
}

export default CupcakeList;
