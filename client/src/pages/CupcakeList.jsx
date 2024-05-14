import { useEffect, useState } from "react";
import { useLoaderData, NavLink } from "react-router-dom";
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
  const [isLoading, setIsLoading] = useState(true);
  const [dataAccessoir, setDataAccessoir] = useState();

  // Step 1: get all cupcakes
  // console.info(useLoaderData());

  const data = useLoaderData();

  // Step 3: get all accessories
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((dataAccessoirs) => {
        setDataAccessoir(dataAccessoirs);
        setIsLoading(false);
      });
  }, []);
  // 4. Setting *dogImage* to the image url that we received from the response above

  // Step 5: create filter state
  const [accessoir, setAccessoir] = useState("");
  const selectChange = (event) => {
    setAccessoir(event.target.value);
  };

  return isLoading ? (
    <h1>en chargement</h1>
  ) : (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={selectChange}>
            <option value="">---</option>

            {/* Step 4: add an option for each accessory */}

            {dataAccessoir.map((el) => (
              <option key={el} id={el.id} value={el.slug}>
                {el.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        
        {/* Step 2: repeat this block for each cupcake */}

        {/* {data.map((e) => (
          <li key={e.id} id={e.id}className="cupcake-item">
            <Cupcake accessoir={data.id}/>
          </li>
        ))} */}

        {/* Step 5: filter cupcakes before repeating */}

        {data
          .filter((acc) => acc.accessory.includes(accessoir))
          .map((e) => (
            <li key={e.id} id={e.id} className="cupcake-item">
              <NavLink to={`/details:id${e.id}`}>
                <Cupcake accessoir={data.id} />
              </NavLink>
            </li>
          ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
