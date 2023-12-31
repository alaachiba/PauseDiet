import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getpatients } from "../../redux/actions";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import Button from "@mui/material/Button";
import { deleteuser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import EditModal from "./EditModal";
import { TablePagination } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PatientList = () => {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpatients());
  }, []);

  const patients = useSelector((state) => state.patients);
  console.log(patients, "rrrrrrrrrrrrrrr");

  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!patients) {
    return <div>Loading...</div>;
  }

  const filteredPatients = patients.filter((el) =>
    el.name.toLowerCase().includes((searchName || "").toLowerCase().trim())
  );

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const displayedPatients = filteredPatients.slice(startIndex, endIndex);

  const deletee = (id) => {
    dispatch(deleteuser(id));
  };

  return (
    <div>
      <TextField
        label="Search by name"
        onChange={(event) => setSearchName(event.target.value)}
        variant="outlined"
        value={searchName}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nom</StyledTableCell>
              <StyledTableCell align="right">Prenom</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedPatients.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    Variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      deletee(row._id);
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    startIcon={<UpgradeIcon />}
                    onClick={() => {
                      navigate(`/Nutritionniste-dash/EditPatient/${row._id}`);
                    }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredPatients.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {selectedUser && <EditModal user={selectedUser} />}
    </div>
  );
};
export default PatientList;
