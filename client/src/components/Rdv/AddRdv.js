import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRdv } from "../../redux/ReduxRdv/actions";
import { Form, FormGroup } from "reactstrap";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import moment from "moment";
import { useEffect } from "react";
import { getpatients } from "../../redux/actions";
import Button from '@mui/material/Button';

function AddRdv() {
  useEffect(() => {
    dispatch(getpatients());
  }, []);

  const patients = useSelector((state) => state.patients);
  const [Rdv, setRdv] = useState({
    DateDebut: "",
    Type: "",
    UserName: "",
    IdUser: "",
  });

  const [dateRdv, setDateRdv] = useState(new Date());
  const [typeRdv, setTypeRdv] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
        <FormGroup>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["MobileDateTimePicker"]}>
              <DemoItem label="Date rendez-vous :">
                <MobileDateTimePicker onChange={handledatechange} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
          <FormControl sx={{ m: 1, minWidth: 300 }}>
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
          <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Nom patient
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Type du rendez-vous"
              onChange={(e) =>
                setRdv({
                  ...Rdv,
                  IdUser: e.target.value._id,
                  UserName: e.target.value.name,
                })
              }
              value={Rdv.UserName}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {patients &&
                patients.map((patient) => (
                  <MenuItem key={patient._id} value={patient}>
                    {patient.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </FormGroup>

        <Button
          color="primary" style={{backgroundColour: "#03C04A"}}
          block
          onClick={takeRdv}
        >
          Take Rdv
        </Button>
      </Form>
    </div>
  );
}

export default AddRdv;
