import{ useEffect, useState } from 'react';
import { useLoaderData, Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";


function CupcakeList() {

    const cupcakes = useLoaderData();
    const [accessories, setAccessories] = useState([]);
    const [selectedAccessory, setSelectedAccessory] = useState('');

    useEffect(() => {
        fetch('http://localhost:3310/api/accessories')
            .then(response => response.json())
            .then(data => setAccessories(data || []));

    }, []);


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
                    Filter by{" "}
                    <select id="cupcake-select" value={selectedAccessory} onChange={handleAccessoryChange}>
                        <option value="">---</option>
                        {accessories.map(accessory => (
                            <option key={accessory.id} value={accessory.id}>
                                {accessory.name}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            <ul className="cupcake-list" id="cupcake-list">
                {filteredCupcakes.map(cupcake => (
                    <li key={cupcake.id} className="cupcake-item">
                        <Link to={`/cupcakes/${cupcake.id}`}>
                            <Cupcake data={cupcake}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CupcakeList;
