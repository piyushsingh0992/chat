import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import EmailIcon from "@material-ui/icons/Email";
import { useStyles } from "./style.js";
import DeleteContact from "../deleteContact";
import UpdateContact from "../updateContact";

export default function ContactInfo({ contactId, contactName, id }) {
  const classes = useStyles();
  const [update, updateSetter] = useState(false);

  return (
    <>
      <UpdateContact
        open={update}
        close={() => {
          updateSetter(false);
        }}
        contactId={contactId}
        contactName={contactName}
        id={id}
      />
      <ListItem className={classes.chatItem}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography variant="h6">{contactName}</Typography>}
          secondary={<Typography variant="p">{contactId}</Typography>}
        />
        <ListItemSecondaryAction className={classes.actionBtns}>
          <Tooltip title="Start a Conversation" aria-label="add">
            <IconButton edge="end" aria-label="delete">
              <EmailIcon className={classes.icon} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit Contact" aria-label="add">
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                updateSetter(true);
              }}
            >
              <EditIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
          <DeleteContact id={id} />
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}
