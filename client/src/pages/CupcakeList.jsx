import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  // Step 1: get all cupcakes
  const cupcakes = useLoaderData();

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data));
  }, []);

  // Step 5: create filter state
  const [accessoryId, setAccessoryId] = useState("");

  function handleChange(e) {
    setAccessoryId(e.target.value);
  }

  const filteredCupcakes = accessoryId
    ? cupcakes.filter((el) => el.accessory_id === accessoryId)
    : cupcakes;

  // ! Ligne 42 : En l'état, lors du premier rendu de React, l'itération sur un tableau vide
  // ! n'entraînera pas de crash.
  // ! Un map effectué sur un tableau vide retournera un tableau vide.
  // ! Le maintien d'une ternaire est toutefois utile si on veut empêcher une itération inutile.

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {accessories.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((el) => (
          <li key={el.id} className="cupcake-item">
            <Link to={`/cupcakes/${el.id}`}>
              <Cupcake data={el} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
