import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function PlantDetails() {
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("component did mount");
    dispatch({ type: "FETCH_PLANTS" });
    // dispatch an action to request the plantList from the API
  }, []);

  const { id } = useParams();
  const details = useSelector((store) => store.plant.plantsReducer);
  console.log(details);
  // Fetch or retrieve more detailed data about the plant using the ID from the URL parameter

  const plant = details.find((plantItem) => plantItem.id === Number(id));

  return (
    <div>
      <h2>Plant Details</h2>
      {plant ? (
        <>
          <div>
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
                  {/* Add more rows here */}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      ) : (
        <p>Plant not found for ID: {id}</p>
      )}
      {/* Add more plant details here */}
    </div>
  );
}

export default PlantDetails;
