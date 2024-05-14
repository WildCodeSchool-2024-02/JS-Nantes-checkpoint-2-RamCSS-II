import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const cupcakes = useLoaderData();

  // Step 3: get all accessories

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 5: filter cupcakes before repeating */}
        {cupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake}/>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
