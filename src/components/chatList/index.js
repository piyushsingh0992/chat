import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import { useSelector } from "react-redux";
import { useStyles } from "./style.js";
import { toast } from "react-toastify";
import CircularProgress from "@material-ui/core/CircularProgress";
import ChatInfo from "../chatInfo";

export default function ChatList() {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const chat = useSelector((state) => state.chat);

  const [loader, loaderSetter] = useState(true);
  const [chatArray, chatArraySetter] = useState([]);

  useEffect(() => {
    if (chat.status === "fullfilled") {
      chatArraySetter(chat.chats);
      loaderSetter(false);
    } else if (chat.status === "rejected") {
      toast.error(chat.message);
      chatArraySetter([]);
      loaderSetter(false);
    }
  }, [chat]);

  return (
    <List dense={dense} className={classes.root}>
      {loader ? (
        <CircularProgress size={28} />
      ) : (
        chatArray.map((item) => <ChatInfo />)
      )}
    </List>
  );
}
