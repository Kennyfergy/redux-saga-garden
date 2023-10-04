import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import plantsReducer from "../../redux/reducers/plant.reducer";
import PlantItem from "../PlantItem/PlantItem";

function PlantList() {
  const dispatch = useDispatch();

  const plantsReducer = useSelector((store) => store.plant.plantsReducer);

  useEffect(() => {
    //console.log("component did mount");
    dispatch({ type: "FETCH_PLANTS" });
    // dispatch an action to request the plantList from the API
  }, []);

  return (
    <div>
      <h3>This is the plant list</h3>
      <ul>
        {plantsReducer.map((plantItem) => {
          return <PlantItem key={plantItem.id} plantItem={plantItem} />;
        })}
      </ul>
    </div>
  );
}

export default PlantList;
