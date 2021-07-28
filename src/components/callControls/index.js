import React, { useState } from "react";

import VideocamOffRoundedIcon from "@material-ui/icons/VideocamOffRounded";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";
import MusicOffRoundedIcon from "@material-ui/icons/MusicOffRounded";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "75%",
    background: "transparent",
    padding: "1rem",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  icon: {
    color: theme.palette.primary.main,
    background: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.common.white,
      transform: "scale(0.9)",
    },
  },

  crossIcon: {
    color: theme.palette.common.white,
    background: "red",
    "&:hover": {
      background: "red",
      transform: "scale(0.9)",
    },
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0 3rem",
  },
}));

export default function CallControls() {
  const [control, controlSetter] = useState({
    video: true,
    audio: true,
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        {control.audio ? (
          <Tooltip title="Voice Call" aria-label="add">
            <IconButton
              className={classes.icon}
              onClick={() => {
                controlSetter((state) => {
                  return { ...state, audio: !state.audio };
                });
              }}
            >
              <MusicNoteRoundedIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="mute Voice Call" aria-label="add">
            <IconButton
              className={classes.crossIcon}
              onClick={() => {
                controlSetter((state) => {
                  return { ...state, audio: !state.audio };
                });
              }}
            >
              <MusicOffRoundedIcon />
            </IconButton>
          </Tooltip>
        )}

        <Tooltip title="Disconnect the call" aria-label="add">
          <IconButton className={classes.crossIcon}>
            <CloseIcon />
          </IconButton>
        </Tooltip>

        {control.video ? (
          <Tooltip title="show video" aria-label="add">
            <IconButton
              className={classes.icon}
              onClick={() => {
                controlSetter((state) => {
                  return { ...state, video: !state.video };
                });
              }}
            >
              <VideocamRoundedIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="hide video" aria-label="add">
            <IconButton
              className={classes.crossIcon}
              onClick={() => {
                controlSetter((state) => {
                  return { ...state, video: !state.video };
                });
              }}
            >
              <VideocamOffRoundedIcon />
            </IconButton>
          </Tooltip>
        )}
      </Container>
    </div>
  );
}
