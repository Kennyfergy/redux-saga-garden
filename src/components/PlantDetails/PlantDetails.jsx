import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PlantDetails() {
  const { id } = useParams();
  const details = useSelector((store) => store.plant.plantsReducer);
  console.log(details);
  // Fetch or retrieve more detailed data about the plant using the ID from the URL parameter

  return (
    <div>
      <h3>Details about plant: {id}</h3>
      {/* Render detailed information about the plant here */}
      <div>
        {details.map((plantItem, id) => {
          <li key={id}>{plantItem.name}</li>;
        })}
      </div>
    </div>
  );
}

export default PlantDetails;
