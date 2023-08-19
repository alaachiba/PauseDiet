import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRdv } from "../../redux/ReduxRdv/actions";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import styled from "styled-components";

function AddRdv() {
  const [dateRdv, setDateRdv] = useState(new Date());
  const [typeRdv, setTypeRdv] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDateRdv(date);
    hideDatePicker();
  };

  const StyledDateTimePicker = styled(DateTimePicker)`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 6px;
    font-size: 16px;
  `;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const takerdv = () => {
    const newRdv = { dateRdv: dateRdv.toISOString(), typeRdv }; // Convert to ISO format
    dispatch(addRdv(newRdv, navigate));
  };

  return (
    <div style={{ padding: "0 15px" }}>
      <h1>Prendre un rendez-vous</h1>
      <Form>
        <FormGroup>
          <Label for="Date Rdv">Date Rdv</Label>
          <div>
            <Button title="Show Date Picker" onClick={showDatePicker} />
            <StyledDateTimePicker
              isOpen={isDatePickerVisible}
              onChange={handleConfirm}
              value={dateRdv}
            />
          </div>
          <br />
          <Label for="typeRdv">type Rdv</Label>
          <select
            id="role"
            onChange={(e) => setTypeRdv(e.target.value)}
            value={typeRdv}
          >
            <option value="Contrôle">Contrôle</option>
            <option value="Consultation">Consultation</option>
          </select>
          <br />
        </FormGroup>

        <Button
          color="dark"
          style={{ marginTop: "2rem" }}
          block
          onClick={takerdv}
        >
          Take Rdv
        </Button>
      </Form>
    </div>
  );
}

export default AddRdv;