import { useLoaderData } from "react-router-dom";
// import {useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const data = useLoaderData();

  console.info(useLoaderData());
  console.info("ceci est data", data);
  // const [accessories, setAccessories] = useState([]);

  // useEffect(() => {
  //  const reponse = fetch("HTTP://localhost:3310/api/accessories")
  // })

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
        {data.map((el) => (
          <li className="cupcake-item" key={el.id}>
            <Cupcake
              name={el.name}
              accessory={el.accessory}
              color1={el.color1}
              color2={el.color2}
              color3={el.color3}
            />
          </li>
        ))}

        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

Cupcake.propTypes = {
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
