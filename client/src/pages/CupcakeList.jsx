import { useLoaderData, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const data = useLoaderData();

  console.info("ceci est data", data);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const reponse = fetch("HTTP://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((acceData) => setAccessories(acceData));
    console.info(reponse);
  }, []);

  // Step 5: create filter state
  const [selectedAcc, setSelectedAcc] = useState("---");

  const filteredCupcake = data.filter((el) => el.accessory_id === selectedAcc);
  console.info("ceci est selectedAcc", selectedAcc);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => setSelectedAcc(e.target.value)}
          >
            <option>---</option>
            {accessories.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {(selectedAcc !== "---" ? filteredCupcake : data).map((el) => (
          <li className="cupcake-item" key={el.id}>
            <NavLink to={`/cupcakes/${el.id}`}>
              <Cupcake
                name={el.name}
                accessory={el.accessory}
                color1={el.color1}
                color2={el.color2}
                color3={el.color3}
              />
            </NavLink>
          </li>
        ))}

        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

Cupcake.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    accessory: PropTypes.string.isRequired,
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
    color3: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

Cupcake.defaultProps = {
  data: {
    accessory: "donut",
    color1: "var(--default-cream-color)",
    color2: "var(--default-cream-color)",
    color3: "var(--default-cream-color)",
    name: "",
  },
};

export default CupcakeList;
