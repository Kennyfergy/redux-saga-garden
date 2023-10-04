import React from "react";
import { useDispatch } from "react-redux";

function PlantItem({ plantItem }) {
  const dispatch = useDispatch();
  //   console.log("props: ", props);
  //console.log(plantItem);
  return (
    <li>
      <span>{plantItem.name}</span>
      <span></span>
      <button
        onClick={() =>
          dispatch({ type: "DELETE_PLANT", payload: plantItem.id })
        }
      >
        Remove
      </button>
    </li>
  );
}

export default PlantItem;
