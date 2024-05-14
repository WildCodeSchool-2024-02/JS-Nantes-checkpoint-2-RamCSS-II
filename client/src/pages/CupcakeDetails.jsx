import { useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
// eslint-disable-next-line import/extensions
import Cupcake from "../components/Cupcake.jsx";

import "./Home.css";

function CupcakeDetails() {
    const { id } = useParams();
    const [cupcakeDetails, setCupcakeDetails] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3310/api/cupcakes/${id}`)
            .then(response => response.json())
            .then(data => setCupcakeDetails(data));
    }, [id]);

    if (!cupcakeDetails) {
        return <h1>Loading...</h1>;
    }

    return (
    <>
        <h1>Cupcake Details {id}</h1>
        <div className="home-cupcake">
            <Cupcake data={cupcakeDetails} />
        </div>
        <div className="home-content">
            <p>Color 1: {cupcakeDetails.color1}</p>
            <p>Color 2: {cupcakeDetails.color2}</p>
            <p>Color 3: {cupcakeDetails.color3}</p>
            <p>Accessory: {cupcakeDetails.accessory}</p>
        </div>
    </>
)
}

export default CupcakeDetails;