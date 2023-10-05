import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./PlantDetails.css";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Container,
  Button,
} from "@mui/material";

function PlantDetails() {
  const dispatch = useDispatch();
  const history = useHistory();

  //   const [isEditing, setIsEditing] = useState(false);
  //   const [updatedDetails, setUpdatedDetails] = useState(plant);

  //   const handleEdit = () => {
  //     setIsEditing(true);
  //   };

  //   const handleSave = () => {
  //     dispatch(updatePlane(updatedDetails));
  //     setIsEditing(false);
  //   };

  useEffect(() => {
    //console.log("component did mount");
    dispatch({ type: "FETCH_PLANTS" });
    // dispatch an action to request the plantList from the API
  }, []);
  const goBack = () => {
    history.push("/plants");
  };

  const { id } = useParams();
  const details = useSelector((store) => store.plant.plantsReducer);
  console.log(details);
  // Fetch or retrieve more detailed data about the plant using the ID from the URL parameter

  const plant = details.find((plantItem) => plantItem.id === Number(id));

  return (
    <Container className="plant-details-container">
      <h2>Plant Details</h2>
      <div className="button-container">
        <Button
          onClick={goBack}
          variant="contained"
          color="primary"
          className="add-plant-button"
        >
          Go Back
        </Button>
      </div>
      {plant ? (
        <>
          <div className="table-container">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Kingdom</TableCell>
                    <TableCell>Clade</TableCell>
                    <TableCell>Order</TableCell>
                    <TableCell>Family</TableCell>
                    <TableCell>Subfamily</TableCell>
                    <TableCell>Genus</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{plant.name}</TableCell>
                    <TableCell>{plant.kingdom}</TableCell>
                    <TableCell>{plant.clade}</TableCell>
                    <TableCell>{plant.order}</TableCell>
                    <TableCell>{plant.family}</TableCell>
                    <TableCell>{plant.subfamily}</TableCell>
                    <TableCell>{plant.genus}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      ) : (
        <p className="not-found">Plant not found for ID: {id}</p>
      )}
    </Container>
  );
}

export default PlantDetails;
