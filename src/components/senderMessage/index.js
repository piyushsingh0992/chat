import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5rem",
    margin: "0.5rem 0",
    borderRadius: "15px",
    maxWidth: "50%",
    wordWrap: "break-word",
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
      <Typography variant="h6" component="h1">
        sdsdsdsdfdsfdsfdsfsdfsdfsdfsfssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdfs
      </Typography>

      <Typography variant="p">Date </Typography>
    </div>
  );
}
