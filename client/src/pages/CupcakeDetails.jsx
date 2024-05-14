import { useLoaderData } from "react-router-dom";

function CupcakeDetails (){

    const data = useLoaderData();
    console.info("est-ce que data est lu ?", data)

    return (
        <figure>
            <h1>Je suis dans la page détaillée</h1>
        </figure>
    )
}

export default CupcakeDetails;