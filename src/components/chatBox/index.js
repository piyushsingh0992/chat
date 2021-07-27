import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SenderMessage from "../senderMessage";
import RecieverMessage from "../recieverMessage";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "75%",
    top: "4.8rem",
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: "70vh",
    padding: "0.5rem ",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      top: "8.4rem",
      maxHeight: "60vh",
    },
  },
}));

export default function ChatBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SenderMessage />
      <RecieverMessage />
      <SenderMessage />
      <RecieverMessage />
      <SenderMessage />
      <RecieverMessage />
      <SenderMessage />
      <RecieverMessage />
      <SenderMessage />
      <RecieverMessage />
      <SenderMessage />
      <RecieverMessage />
      <RecieverMessage />
      <RecieverMessage />
      <SenderMessage />
      <SenderMessage />
      <SenderMessage />
    </div>
  );
}
