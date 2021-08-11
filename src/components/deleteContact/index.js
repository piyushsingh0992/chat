import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { useStyles } from "./style.js";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../container/contact/contactSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
export default function DeleteContact({ contactId }) {
  const classes = useStyles();
  const [loader, loaderSetter] = useState(false);
  const contact = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loader) {
      if (contact.status === "fullfilled") {
        loaderSetter(false);
        toast.success(contact.message);
      } else if (contact.status === "rejected") {
        toast.error(contact.message);
        loaderSetter(false);
      }
    }
  }, [contact]);

  return (
    <Tooltip title="Delete Contact" aria-label="add">
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => {
          loaderSetter(true);
          dispatch(deleteContact({ contactId }));
        }}
      >
        {loader ? (
          <CircularProgress size={28} />
        ) : (
          <DeleteIcon className={classes.icon} />
        )}
      </IconButton>
    </Tooltip>
  );
}
