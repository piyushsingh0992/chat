import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "75%",
    background: "transparent",
    padding: "0.5rem",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  inputRoot: {
    border: `0.5px solid ${theme.palette.primary.main}`,
 
    color: "inherit",
    background: "white",
    width: "100%",
    padding: "0.5rem ",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    transition: theme.transitions.create("width"),
    width: "100%",
  },
  actionBtns: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    background: "yellow",
    background: theme.palette.background.main,
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    border: `0.5px solid ${theme.palette.primary.main}`,
    borderTop:0,
  },

  icon: {
    color: theme.palette.primary.main,
  },
}));

export default function Keyboard() {
  const [inputText, inputTextSetter] = useState("");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputBase
        placeholder="Type your message"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        value={inputText}
        onChange={(e) => {
          inputTextSetter(e.target.value);
        }}
      />
      <div className={classes.actionBtns}>
        <Tooltip title="use Emoji" aria-label="add">
          <IconButton>
            <InsertEmoticonIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Upload Image" aria-label="add">
          <IconButton>
            <ImageOutlinedIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Send Message" aria-label="add">
          <IconButton>
            <SendIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
