import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Import your image
import ImageLogin from "../../Login1.jpg";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true); // Controls the modal visibility

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = () => {
    dispatch(loginUser({ email, password }, navigate));
  };

  const handleSignUpEvent = () => {
    navigate("/SignUp");
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="login-modal"
      aria-describedby="login-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none", // Remove the border
      }}
    >
      <Box sx={{ width: 400, bgcolor: "background.paper", p: 3 }}>
        <Typography variant="h6" id="login-modal" style={{ marginBottom: "16px", color: "#03C04A" }}>
          Login
        </Typography>
        {/* Restore the image */}
        <img src={ImageLogin} alt="Login" style={{ width: "100%", height: "auto", marginTop: "16px" }} />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="standard"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          variant="standard"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={login}
          color="primary"
          variant="contained"
          fullWidth
          style={{ marginTop: "16px", backgroundColor: "#03C04A" }}
        >
          Log in
        </Button>
        <Typography variant="body2" style={{ marginTop: "16px" }}>
          If you don't have an account,{" "}
          <Button
            onClick={handleSignUpEvent}
            color="primary"
            style={{ backgroundColor: "#03C04A", paddingLeft: 0 }}
          >
            Sign up
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default LoginModal;
