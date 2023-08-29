import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { editPatient } from "../../redux/actions";
import {
  useParams
  } from "react-router-dom";


const EditModal = ({el}) => {
  const [modal, setModal] = useState(false);
  const[name,setName]=useState(el.name)
  const[lastName,setLastname] = useState(el.lastName)
  const[email,setEmail]=useState(el.email)
  const[role,setRole]=useState(el.role)
  const toggle = () => {
    setModal(!modal);
  };
  const dispatch = useDispatch();
  let { id } = useParams();
  const editt=()=>{
    dispatch(editPatient(el._id,{name, lastName, email, role}))
    setModal(!modal)
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        edit contact{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>edit modal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">name</Label>
              <Input
         value={name}
         onChange={(e)=>setName(e.target.value)}
                type="text"
                name="name"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Last Name</Label>
              <Input
              value={lastName}
              onChange={(e)=>setLastname(e.target.value)}
                type="text"
                name="last name"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"> Role</Label>
              <Input
              value={role}
              onChange={(e)=>setRole(e.target.value)}
                type="text"
                name="Role"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>
            save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModal;