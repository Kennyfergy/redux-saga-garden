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

  const addNewPlant = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_PLANT", payload: newPlant });
    console.log("adding plant", newPlant);
    //updates the next plant to have a new id
    setPlant({
      name: "",
      kingdom: "",
      clade: "",
      order: "",
      family: "",
      subfamily: "",
      genus: "",
    });
  };
  return (
    <div>
      <h3>Add a plant to the garden</h3>

      <form>
        <input
          type="text"
          value={newPlant.name}
          onChange={() =>
            setPlant({
              ...newPlant,
              name: event.target.value,
            })
          }
          placeholder="Name"
        />
        <input
          type="text"
          value={newPlant.kingdom}
          onChange={() =>
            setPlant({
              ...newPlant,
              kingdom: event.target.value,
            })
          }
          placeholder="Kingdom"
        />
        <input
          type="text"
          value={newPlant.clade}
          onChange={() =>
            setPlant({
              ...newPlant,
              clade: event.target.value,
            })
          }
          placeholder="Clade"
        />
        <input
          type="text"
          value={newPlant.order}
          onChange={() =>
            setPlant({
              ...newPlant,
              order: event.target.value,
            })
          }
          placeholder="Order"
        />
        <input
          type="text"
          value={newPlant.family}
          onChange={() =>
            setPlant({
              ...newPlant,
              family: event.target.value,
            })
          }
          placeholder="Family"
        />
        <input
          type="text"
          value={newPlant.subfamily}
          onChange={() =>
            setPlant({
              ...newPlant,
              subfamily: event.target.value,
            })
          }
          placeholder="Family"
        />
        <input
          type="text"
          value={newPlant.genus}
          onChange={() =>
            setPlant({
              ...newPlant,
              genus: event.target.value,
            })
          }
          placeholder="Genus"
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
