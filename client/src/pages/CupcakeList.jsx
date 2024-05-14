
import{ useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
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
  // Step 1: get all cupcakes

    const cupcakes = useLoaderData();
    const [accessories, setAccessories] = useState([]);
    const [selectedAccessory, setSelectedAccessory] = useState('');

    // Step 3: get all accessories
    useEffect(() => {
        fetch('http://localhost:3310/api/accessories')
            .then(response => response.json())
            .then(data => setAccessories(data || []));

    }, []);



  // Step 5: create filter state

    const handleAccessoryChange = (event) => {
        setSelectedAccessory(event.target.value);
    };

    const filteredCupcakes = cupcakes.filter(cupcake =>
        selectedAccessory === '' || cupcake.accessory_id === selectedAccessory
    );


    return (
        <>
            <h1>My cupcakes</h1>
            <form className="center">
                <label htmlFor="cupcake-select">
                    {/* Step 5: use a controlled component for select */}
                    Filter by{" "}
                    <select id="cupcake-select" value={selectedAccessory} onChange={handleAccessoryChange}>
                        <option value="">---</option>
                        {accessories.map(accessory => (
                            <option key={accessory.id} value={accessory.id}>
                                {accessory.name}
                            </option>
                        ))}
                        {/* Step 4: add an option for each accessory */}
                    </select>
                </label>
            </form>
            <ul className="cupcake-list" id="cupcake-list">
                {/* Step 2: repeat this block for each cupcake */}
                {/* Step 5: filter cupcakes before repeating */}
                {filteredCupcakes.map(cupcake => (
                    <li key={cupcake.id} className="cupcake-item">
                        <Cupcake data={cupcake}/>
                    </li>
                ))}
                {/* end of block */}
            </ul>
        </>
    );
}

export default CupcakeList;
