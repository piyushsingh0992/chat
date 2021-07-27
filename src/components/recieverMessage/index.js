import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5rem",
    borderRadius: "15px",

    maxWidth: "50%",
    wordWrap: "break-word",
    alignSelf: "flex-end",
    margin: "0.5rem 0",

    background: theme.palette.background.main,

    [theme.breakpoints.down("xs")]: {
      maxWidth: "50%",
    },
  },
}));

export default function SenderMessage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6">
        sdsdsdsdfdsfdsfdsfsdfsdfsdfsfssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdfs
      </Typography>

      <Typography variant="p">Date </Typography>
    </div>
  );
}
