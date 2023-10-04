import React from "react";
import { useParams } from "react-router-dom";

function PlantDetails() {
  const { id } = useParams();

  // Fetch or retrieve more detailed data about the plant using the ID from the URL parameter

  return (
    <div>
      <h3>Details about plant: {id}</h3>
      {/* Render detailed information about the plant here */}
      {/* {plantItem.kingdom} */}
    </div>
  );
}

export default PlantDetails;
