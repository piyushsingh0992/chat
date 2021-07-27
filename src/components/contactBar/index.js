import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  icon: {
    height: "2rem",
    color: theme.palette.primary.main,
    transform: "scale(1.5)",
  },
}));

export default function ContactBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>All Contacts</h1>
      <Tooltip title="Add New Contacts" aria-label="add">
        <IconButton>
          <AddBoxIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
