import React, { useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddContact from "../addContact";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem 3rem 0 2rem",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    position: "fixed",
    top: 0,
    zIndex: 1,
    width: "75%",
    background: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      top: "3rem",
      width: "100%",
      background: "white",
      padding: "0.5rem 1rem 0 1rem",
    },
  },
  icon: {
    color: theme.palette.common.white,
    transform: "scale(1.5)",

    [theme.breakpoints.down("xs")]: {
      color: theme.palette.primary.main,
    },
  },
  header: {
    color: theme.palette.common.white,

    [theme.breakpoints.down("xs")]: {
      color: theme.palette.primary.main,
    },
  },
}));

export default function ContactHeader() {
  const classes = useStyles();
  const [open, openSetter] = useState(false);
  return (
    <div className={classes.root}>
      <AddContact
        open={open}
        close={() => {
          openSetter(false);
        }}
      />
      <Typography variant="h5" noWrap className={classes.header}>
        All Contacts
      </Typography>

      <Tooltip title="Add New Contacts" aria-label="add">
        <IconButton
          onClick={() => {
            openSetter(true);
          }}
        >
          <AddBoxIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
