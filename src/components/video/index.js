import React,{useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import heroVideo from "./video/dog.mp4";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.secondary,
    margin: "0.1rem 0",
    padding: "1.5rem 0rem",
    borderRadius: "15px",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem 0rem",
    },
  },

  avatar: {
    height: "183px",
    width: "183px",

    [theme.breakpoints.down("xs")]: {
      height: "174px",
      width: "174px",
    },
  },
  video: {
    maxHeight: "183px",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "174px",
    },
  },
}));
export default function Video() {
  const classes = useStyles();
  const [video, videoSetter] = useState(true);
  return (
    <div className={classes.root}>
      {video ? (
        <video className={classes.video}>
          <source src={heroVideo} type="video/mp4" />
        </video>
      ) : (
        <Avatar className={classes.avatar}>P</Avatar>
      )}
    </div>
  );
}
