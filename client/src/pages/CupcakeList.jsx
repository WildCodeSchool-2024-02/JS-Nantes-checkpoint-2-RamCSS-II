import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const cupcakes = useLoaderData();

  const [accessories, setAccessories] = useState([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((response) => setAccessories(response));
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label
          htmlFor="cupcake-select"
          onChange={(event) => setSelectedAccessory(event.target.value)}
        >
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes
          .filter((cupcake) =>
            selectedAccessory === ""
              ? true
              : cupcake.accessory_id === selectedAccessory
          )
          .map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default CupcakeList;
