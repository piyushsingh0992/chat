import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import { useSelector } from "react-redux";
import { useStyles } from "./style.js";

import { toast } from "react-toastify";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
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
        chatArray.map((item) => {
          return (
            <ListItem className={classes.chatItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          );
        })
      )}
    </List>
  );
}
