import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "5vh",
    right: "5vw",
    background: "white",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      top: "12vh",
    },
  },
}));

export default function ThemeToggle() {
  const classes = useStyles();

  const [theme, themeSetter] = useState(false);
  return (
    <Tooltip title="Change Theme" aria-label="add">
      <IconButton
        // color="primary"
        className={classes.root}
        onClick={() => {
          themeSetter((value) => !value);
        }}
      >
        {theme ? <Brightness7Icon /> : <Brightness3Icon />}
      </IconButton>
    </Tooltip>
  );
}
