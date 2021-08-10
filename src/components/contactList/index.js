import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector } from "react-redux";
import { useStyles } from "./style.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { toast } from "react-toastify";

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [loader, loaderSetter] = useState(true);
  const [contactArray, contactArraySetter] = useState(null);
  const contact = useSelector((state) => state.contact);

  useEffect(() => {
    if (contact.status === "fullfilled") {
      contactArraySetter(contact.chats);
      loaderSetter(false);
    } else if (contact.status === "rejected") {
      toast.error(contact.message);
      contactArraySetter([]);
      loaderSetter(false);
    }
  }, [contact]);

  return (
    <List dense={dense} className={classes.root}>
      {loader ? (
        <CircularProgress size={28} />
      ) : (
        contactArray.map((item) => (
          <ListItem className={classes.chatItem}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="h6">All Contacts</Typography>}
              secondary={<Typography variant="p">All Contacts</Typography>}
            />
            <ListItemSecondaryAction>
              <Tooltip title="Delete Contact" aria-label="add">
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon className={classes.delete} />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      )}
    </List>
  );
}
