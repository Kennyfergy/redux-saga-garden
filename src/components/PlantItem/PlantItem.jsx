import React from "react";
import { useDispatch } from "react-redux";

function PlantItem(props) {
  //   const dispatch = useDispatch(); don't need until delete button
  //   console.log("props: ", props);
  return (
    <li>
      <span>{props.plantItem.name}</span>
    </li>
  );
}

export default PlantItem;
