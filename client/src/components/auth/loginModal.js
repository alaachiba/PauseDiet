import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
} from "reactstrap";
import TextField from '@mui/material/TextField';
import ImageLogin from '../../Login1.jpg';
import Button from '@mui/material/Button';


const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginn = () => {
    dispatch(loginUser({ email, password }, navigate));
  };

  const HandleSignUpEvent = (e) =>{
    navigate ("/SignUp")
  }

  return (
    <div>
      <Modal isOpen={true}  style={{ padding: "0 15px" }}>
        <ModalHeader>Login</ModalHeader>
        <img src={ImageLogin} alt="Nothing" sx={{ width : "50%"}}/>
        <ModalBody>
          <Form>
            <FormGroup>
            <TextField
                          label="Email"
                          name="email"
                          type="email"
                          variant="standard"
                          onChange={(e)=>(setEmail(e.target.value))}
                        />
              <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(e)=>(setPassword(e.target.value))}
                      />

                    <Button onClick={loginn} color="primary" style={{backgroundColour: "#03C04A"}}>
                        Log in
                    </Button>
            </FormGroup>
          </Form>
          <label>If you don't have an account</label>
                  <Button type="submit" color="primary" onClick={HandleSignUpEvent} style={{backgroundColour: "#03C04A"}}>
                        Sign up
                  </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
