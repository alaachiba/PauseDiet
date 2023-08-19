import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getpatients } from "../../redux/actions";
import Table from "./Table";
import { useState } from "react";


const PatientList = () => {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpatients());
  }, []);

  const patients = useSelector((state) => state.patients);
  console.log(patients, "rrrrrrrrrrrrrrr");

  if (!patients) {
    return <div>Loading...</div>;
  }

  const filteredPatients = patients.filter((el) =>
    el.name.toLowerCase().includes((searchName || "").toLowerCase().trim())
  );

  return (
    <div>
  <h1>Patient list</h1>
      <label>Search</label>
      <input onChange={(event) => setSearchName(event.target.value)} />
      <table className="Table" border={5}>
        <tr>
          <th>name</th>
          <th>last name</th>
          <th>email</th>
          <th>role</th>
          <th>delete</th>
          <th>update</th>
        </tr>

        {filteredPatients.map((el) => <Table key={el.id} el={el} />)}
      </table>
    </div>
  );
};
export default PatientList;
