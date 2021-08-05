import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CallIcon from "@material-ui/icons/Call";

import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";

import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import Tooltip from "@material-ui/core/Tooltip";

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
    padding: theme.spacing(1, 2, 2),
    border: "none",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accept: {
    color: theme.palette.primary.main,
    background: theme.palette.common.white,
    height: "3.7rem",
    width: "3.7rem",
    "&:hover": {
      background: theme.palette.common.white,
      transform: "scale(0.9)",
    },
  },

  reject: {
    color: theme.palette.common.white,
    background: "red",
    height: "3.7rem",
    width: "3.7rem",
    "&:hover": {
      background: "red",
      transform: "scale(0.9)",
    },
  },
  avatar: {
    height: "6.5rem",
    width: "6.5rem",
    marginBottom: "1rem",
  },
  controls: {
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
  closeModal: {
    fontSize: "1.5rem",
    position: "relative",
    left: 180,
    cursor: "pointer",
  },
}));

export default function CallModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseIcon className={classes.closeModal} onClick={handleClose} />
      <Avatar className={classes.avatar} />
      <Typography variant="h4">A</Typography>
      <Typography variant="h6">Calling...</Typography>
      <div className={classes.controls}>
        <Tooltip title="Accept the  Call" aria-label="add">
          <IconButton className={classes.accept}>
            <CallIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Reject the call" aria-label="add">
          <IconButton className={classes.reject}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      //   onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
