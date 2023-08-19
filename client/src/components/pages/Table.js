import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { deleteuser } from "../../redux/actions";
import EditModal from "./EditModal";

function Table({ el }) {
  const dispatch = useDispatch();

  console.log(el, "ugirg");
  const deletee = () => {
    dispatch(deleteuser(el._id));
  };
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.lastName}</td>
      <td>{el.email}</td>
      <td>{el.role}</td>
      <td>
        <Button onClick={deletee}>delete</Button>
      </td>
      <td><EditModal el={el}/></td>
    </tr>
  );
}

export default Table;