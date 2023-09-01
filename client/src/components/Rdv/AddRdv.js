import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRdv } from "../../redux/ReduxRdv/actions";
import { Form } from "reactstrap";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import moment from "moment";
import Button from '@mui/material/Button';
import { getpatients } from "../../redux/actions";

function AddRdv() {
  useEffect(() => {
    dispatch(getpatients());
  }, []);

  const patients = useSelector((state) => state.patients);
  const [selectedPatient, setSelectedPatient] = useState("");
  
  const [Rdv, setRdv] = useState({
    DateDebut: "",
    Type: "",
    UserName: "",
    IdUser: "",
  });

  useEffect(() => {
    console.log(patients);
  }, [patients]);

  const takeRdv = () => {
    dispatch(addRdv(Rdv));
    console.log(Rdv);
    window.location.reload(false);
  };

  const handledatechange = (e) => {
    setRdv({ ...Rdv, DateDebut: moment(e.toDate())._i });
  };

  const dispatch = useDispatch();

  return (
    <div style={{ padding: "0 15px" }}>
      <h2>Prendre un rendez-vous</h2>
      <Form>
        <div style={{ marginBottom: "10px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["MobileDateTimePicker"]}>
              <DemoItem label="Date rendez-vous :">
                <MobileDateTimePicker onChange={handledatechange} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Type du rendez-vous
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={Rdv.Type}
              label="Type du rendez-vous"
              onChange={(e) => setRdv({ ...Rdv, Type: e.target.value })}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Contrôle">Contrôle</MenuItem>
              <MenuItem value="Consultation">Consultation</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ marginBottom: "10px" }}>
        <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Nom patient
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Nom patient"
              onChange={(e) => {
                const selectedId = e.target.value;
                setSelectedPatient(selectedId); // Track the selected patient ID
                setRdv({ ...Rdv, IdUser: selectedId });
              }}
              value={selectedPatient} // Use the selectedPatient state
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {patients &&
                patients.map((patient) => (
                  <MenuItem key={patient._id} value={patient._id}>
                    {patient.name}  {patient.lastName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <Button
          color="primary"
          style={{ backgroundColour: "#03C04A" }}
          fullWidth // Make the button full width
          onClick={takeRdv}
        >
          Take Rdv
        </Button>
      </Form>
    </div>
  );
}

export default AddRdv;
