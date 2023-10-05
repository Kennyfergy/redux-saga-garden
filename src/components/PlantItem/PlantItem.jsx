import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import "./PlantItem.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // A green color
    },
    secondary: {
      main: "#795548", // A brown color
    },
  },
});

function PlantItem({ plantItem }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSeeMoreClick = () => {
    history.push(`/plant/${plantItem.id}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <List>
        <ListItem className="list-item">
          <ListItemText
            primary={plantItem.name}
            secondary={plantItem.kingdom}
            classes={{
              primary: "list-item-text-primary",
              secondary: "list-item-text-secondary",
            }}
          />
          <Button
            variant="contained"
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
        <Divider className="divider" />
      </List>
    </ThemeProvider>
  );
}

export default PlantItem;
