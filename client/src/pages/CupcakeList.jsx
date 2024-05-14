import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
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
  // chargement des accessoires dans un state
  const [dataAccessories, setDataAccessories] = useState([]);
  // custom choice state
  const [choiceAccessories, setChoiceAccessories] = useState('');

  // Step 1: get all cupcakes
  const cupCakeData = useLoaderData();
  console.info('%c⧭ cupCakeData ', 'color: #00e600', cupCakeData);


  // Step 3: get all accessories
  const loadAccessories = () => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setDataAccessories(data));
  };

  useEffect(() => {
    loadAccessories();
  }, ([]));

  // step 4 on filtre les cupcakes souhaités
  const handleSelect = (event) => {
    setChoiceAccessories(event.target.value);
  }

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleSelect}>
            {dataAccessories && dataAccessories.map(accessories =>
              <option key={accessories.id} value={accessories.slug}>{accessories.name}</option>
            )}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupCakeData && (
          choiceAccessories === "" ? (
            cupCakeData.map(cupCake =>
              <li className="cupcake-item" key={cupCake.id}>
                <Cupcake data={cupCake} />
              </li>
            )) : (
            cupCakeData.filter(cupCake =>
              <li className="cupcake-item" key={cupCake.id}>
                <Cupcake data={cupCake} />
              </li>
            ))
        )}
        {/* Step 5: filter cupcakes before repeating */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
