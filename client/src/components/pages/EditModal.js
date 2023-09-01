import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser, updateUser } from "../../redux/actions";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const EditModal = () => {
  const { id } = useParams(); // Get the 'id' from the URL

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    dispatch(fetchUser(id)); // Fetch user data using the 'id'
  }, [dispatch, id]);

  useEffect(() => {
    console.log(user);
    setUserData(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(updateUser(id, userData)); // Update user data using the 'id'
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Typography variant="h4" gutterBottom>
          Edit User
        </Typography>
        {error && <p>Error: {error.message}</p>}
        <form>
          <Box mb={2}>
            <TextField
              fullWidth
              label="First Name"
              name="name"
              value={userData.name || ""}
              onChange={handleInputChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={userData.lastName || ""}
              onChange={handleInputChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={userData.phone || ""}
              onChange={handleInputChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={userData.email || ""}
              onChange={handleInputChange}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Update User
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EditModal;
