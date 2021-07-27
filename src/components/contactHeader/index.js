import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    position: "fixed",
    top: 0,
    zIndex: 9999999,
    width: "75%",
    background: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      top: "3.5rem",
      width: "100%",
      background: theme.palette.background.default,
    },
  },
  icon: {
    height: "2rem",
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
  return (
    <div className={classes.root}>
      <Typography variant="h5" noWrap className={classes.header}>
        All Contacts
      </Typography>

      <Tooltip title="Add New Contacts" aria-label="add">
        <IconButton>
          <AddBoxIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
