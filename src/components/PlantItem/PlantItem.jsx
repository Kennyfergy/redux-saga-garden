import React from "react";
import { useDispatch } from "react-redux";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useHistory } from "react-router-dom";

function PlantItem({ plantItem }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSeeMoreClick = () => {
    // Navigate to the plant details page
    history.push(`/plant/${plantItem.id}`);
  };

  return (
    <List>
      <ListItem>
        <ListItemText primary={plantItem.name} />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSeeMoreClick}
          style={{ marginRight: "8px" }}
        >
          See More Details
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            dispatch({ type: "DELETE_PLANT", payload: plantItem.id })
          }
        >
          Remove
        </Button>
      </ListItem>
      <Divider />
    </List>
  );
}

export default PlantItem;
