import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ImageLogin from '../../Login1.jpg';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("nutritionniste");
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState("")
  console.log(role,'ttttttttttttttttttttt')

  const toggle = () => {
    setModal(!modal);
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const registerr = () => {
    const newUser = { name, lastName, email, password, phone, role,image };
    dispatch(registerUser(newUser,navigate));
    toggle();
    
  };

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setUploading(true);
    axios
      .post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };
  return (
    <div style={{ padding: " 50PX 300px" }}>
      
          <form>
            <Stack spacing={2}> 
             <img src={ImageLogin} alt="Nothing" sx={{ width : "50%"}}/>
               <TextField
                          
                          label="name"
                          name="name"
                          type="text"
                          variant="standard"
                          onChange={(e) => setName(e.target.value)}
                        />
              <TextField
                          
                          label="Last Name"
                          name="lastName"
                          type="text"
                          variant="standard"
                          onChange={(e) => setLastName(e.target.value)}
                        />
              <TextField
                          
                          label="Email"
                          name="email"
                          type="email"
                          variant="standard"
                          onChange={(e) => setEmail(e.target.value)}
                        />
              <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <TextField
                          
                          label="Phone"
                          name="Phone"
                          type="Phone"
                          variant="standard"
                          definitions={{
                            '#': /[1-9]/,
                          }}
                          onChange={(e) => setPhone(e.target.value)}
                        />
              <InputLabel id="demo-simple-select-helper-label">Rôle</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                
                label="Role"
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="nutritionniste">Nutritionniste</MenuItem>
                <MenuItem value="secretaire">Secretaire</MenuItem>
                <MenuItem value="patient">Patient</MenuItem>
              </Select>

           
            
              <>
                  {image?  (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
      
              <Button
                
                sx={{ marginTop: "2rem" }}
                onClick={registerr}
              >
                Register
              </Button>
            </Stack>
          </form>
        
    </div>
  );
};

export default RegisterModal;
