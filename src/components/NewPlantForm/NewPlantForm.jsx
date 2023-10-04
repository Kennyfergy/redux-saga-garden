import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./NewPlantForm.css";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  Container,
} from "@mui/material";

const NewPlantForm = () => {
  const dispatch = useDispatch();

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

  const handleChange = (prop) => (event) => {
    setPlant({
      ...newPlant,
      [prop]: event.target.value,
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
        <Typography variant="h5" gutterBottom>
          Add a plant to the garden
        </Typography>
        <form onSubmit={addNewPlant}>
          <Grid container spacing={2}>
            {Object.keys(newPlant).map((key) => (
              <Grid item xs={12} key={key}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalize label
                  value={newPlant[key]}
                  onChange={handleChange(key)}
                  required
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Add New Plant
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default NewPlantForm;
