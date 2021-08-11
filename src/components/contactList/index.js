import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import { useSelector } from "react-redux";
import { useStyles } from "./style.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { toast } from "react-toastify";
import ContactInfo from "../contactInfo";

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [loader, loaderSetter] = useState(true);
  const [contactArray, contactArraySetter] = useState(null);
  const contact = useSelector((state) => state.contact);

  useEffect(() => {
    if (contact.status === "fullfilled") {
      contactArraySetter(contact.contacts);
      loaderSetter(false);
    } else if (contact.status === "rejected" && contactArray === null) {
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
        contactArray.map((item) => <ContactInfo contactId={item.contactId} contactName={item.contactName} />)
      )}
    </List>
  );
}
