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
import { addNewContact } from "../../container/contact/contactSlice.js";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
    maxWidth: "100%",
  },
}));

export default function CreateGroup({ open, close }) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const contact = useSelector((state) => state.contact);
  const [loader, loaderSetter] = useState(false);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseIcon className={classes.closeModal} onClick={close} />
      <Typography variant="h5">Create Group</Typography>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="groupName"
        label="Group Name"
        name="groupName"
        autoFocus
      />
      <FormControl className={classes.formControl}>
        <InputLabel>Contacts</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
        >
          {contact.contacts.map((item) => (
            <MenuItem key={item.contactId} value={item.contactId}>
              {item.contactName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={classes.modalActions}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => {
            loaderSetter(true);
          }}
          disabled={loader}
        >
          {loader ? (
            <CircularProgress size={28} />
          ) : (
            <Typography variant="p">Create Group</Typography>
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
