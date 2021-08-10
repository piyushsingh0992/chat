import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import { useStyles } from "./style.js";

export default function ChatInfo() {
  const classes = useStyles();
  const [secondary, setSecondary] = useState(false);

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
}
