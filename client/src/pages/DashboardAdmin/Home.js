import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//dialog imports
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import moment from "moment";
import { momentLocalizer } from "react-big-calendar";
import AddRdv from "../../components/Rdv/AddRdv";
import { getRdvs } from "../../redux/actions"

moment.locale("fr");
moment.updateLocale("fr", {
  week: {
    dow: 1,
    doy: 4,
  },
});

const locales = momentLocalizer(moment);

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

//******************************* */
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
/************************************************ */
const HomeDashboard = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRdvs());
  }, [dispatch]);

  const Rdvs = useSelector((state) => state.rdvss);

  console.log(Rdvs, 'yyyyy');

  const EvenetsList = Rdvs.map((rdv) => ({
    _id: rdv._id,
    title: rdv.typeRdv, // You should use the actual properties from your Rdv object
    start: rdv.dateRdv, // Use the appropriate date property
    end: rdv.dateEnd, // Use the appropriate date property
  }));

  const [selectedEvent, setSelectedEvent] = useState(undefined);
  const [modalState, setModalState] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSelectedEvent = (event) => {
    console.log(event);
    setSelectedEvent(event);
    setModalState(true);
    handleClickOpen();
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={12}>
            <Calendar
              selectable
              localizer={localizer}
              events={EvenetsList}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              onSelectEvent={(e) => handleSelectedEvent(e)}
            />
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                Modal title
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </Typography>
                <Typography gutterBottom>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </Typography>
                <Typography gutterBottom>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Save changes
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </Grid>
          <Grid item xs={4}>
            <AddRdv />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default HomeDashboard;
