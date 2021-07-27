import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import DuoIcon from "@material-ui/icons/Duo";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    position: "fixed",
    top: 0,
    zIndex: 9999999,
    width: "75%",
    background: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      top: "3.5rem",
      width: "100%",
    },
  },
  icon: {
    height: "2rem",
    color: theme.palette.common.white,
    transform: "scale(1.3)",
    marginRight: "1rem",
  },
  header: {
    color: theme.palette.common.white,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: "60px",
    width: "60px",
    marginRight: "1rem",
  },
  userDetails: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function ChatHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.userDetails}>
        <Avatar aria-label="recipe" className={classes.avatar}>
          R
        </Avatar>
        <Typography variant="h5" noWrap className={classes.header}>
          All Contacts
        </Typography>
      </div>
      <div>
        <Tooltip title="Voice Call" aria-label="add">
          <IconButton>
            <CallIcon className={classes.icon} />
          </IconButton>
        </Tooltip>

        <Tooltip title="VideoCall" aria-label="add">
          <IconButton>
            <DuoIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
