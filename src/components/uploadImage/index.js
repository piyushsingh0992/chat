import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },

  icon: {
    background: "white",
    "&:hover": {
      background: "white",
    },
  },
}));

export default function UploadImage({ userDetailsSetter }) {
  const classes = useStyles();

  const [fileInputState, setFileInputState] = useState("");
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        userDetailsSetter((value) => {
          return { ...value, userImage: reader.result };
        });
      }
    };
  };

  const handleFileInputChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      previewFile(file);
      setFileInputState(e.target.value);
    }
  };

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={handleFileInputChange}
        value={fileInputState}
      />
      <Tooltip title="Edit" aria-label="add">
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            className={classes.icon}
          >
            <EditIcon />
          </IconButton>
        </label>
      </Tooltip>
    </div>
  );
}
