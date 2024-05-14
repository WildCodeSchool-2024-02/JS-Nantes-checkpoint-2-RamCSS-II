import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeDetails() {
  const cupcake = useLoaderData();

  return <Cupcake data={cupcake} />;
}
