import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useInputChange } from "../../customHooks/inputChange.js";
import { updateContact } from "../../container/contact/contactSlice.js";
import EditIcon from "@material-ui/icons/Edit";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.main,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3),
    border: "none",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeModal: {
    position: "relative",
    left: 180,
    cursor: "pointer",
  },
  modalActions: {
    display: "flex",
    justifyContent: "flex-end",
    minWidth: "100%",
    padding: theme.spacing(2, 0, 0, 0),
  },
}));

export default function AddContact({
  open,
  close,
  contactName,
  contactId,
  id,
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const contact = useSelector((state) => state.contact);
  const [loader, loaderSetter] = useState(false);
  const dispatch = useDispatch();
  const [newContactDetails, newContactDetailsSetter] = useState({
    id,
    contactName,
    contactId,
  });
  const changeHandler = useInputChange(newContactDetailsSetter);
  useEffect(() => {
    if (loader) {
      if (contact.status === "fullfilled") {
        loaderSetter(false);
        toast.success(contact.message);
        close();
      } else if (contact.status === "rejected") {
        toast.error(contact.message);
        loaderSetter(false);
      }
    }
  }, [contact]);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseIcon className={classes.closeModal} onClick={close} />
      <Typography variant="h5">Update Contact</Typography>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="contactName"
        label="Contact Name"
        name="contactName"
        value={newContactDetails.contactName}
        onChange={changeHandler}
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="contactId"
        label="Contact Id"
        id="contactId"
        value={newContactDetails.contactId}
        onChange={changeHandler}
      />
      <div className={classes.modalActions}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<EditIcon />}
          onClick={() => {
            loaderSetter(true);

            dispatch(updateContact(newContactDetails));
          }}
          disabled={loader}
        >
          {loader ? (
            <CircularProgress size={28} />
          ) : (
            <Typography variant="p">Update</Typography>
          )}
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
