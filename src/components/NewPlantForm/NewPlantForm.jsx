import React, { useState } from "react";
import { useDispatch } from "react-redux";

const NewPlantForm = () => {
  const dispatch = useDispatch();

  //Initial state is an OBJECT, with keys id and name
  let [newPlant, setPlant] = useState({
    name: "",
    kingdom: "",
    clade: "",
    order: "",
    family: "",
    subfamily: "",
    genus: "",
  });

  const handleNameChange = (event) => {
    console.log("event happened");
    //Similar to in redux -- we don't want to get rid of the id field when we update name
    setPlant({
      ...newPlant,
      name: event.target.value,
    });
  };
  const handleKingdomChange = (event) => {
    setPlant({
      ...newPlant,
      kingdom: event.target.value,
    });
  };
  const addNewPlant = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_PLANT", payload: newPlant });
    console.log("adding plant", newPlant);
    //updates the next plant to have a new id
    setPlant({ name: "", kingdom: "" });
  };
  return (
    <div>
      <h3>Add a plant to the garden</h3>

      <form>
        <input
          type="text"
          value={newPlant.name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <input
          type="text"
          value={newPlant.kingdom}
          onChange={handleKingdomChange}
          placeholder="Kingdom"
        />
        {/* <input
          type="submit"
          value="Add New Plant"
          
        /> */}
        <button type="submit" onClick={addNewPlant}>
          Add New Plant
        </button>
      </form>
    </div>
  );
};

export default NewPlantForm;
