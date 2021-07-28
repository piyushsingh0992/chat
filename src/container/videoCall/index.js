import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../components/navBar";
import SideNav from "../../components/sideNav";
import ChatHeader from "../../components/chatHeader";
import CallControls from "../../components/callControls";
import Avatar from "@material-ui/core/Avatar";
import Video from "../../components/video";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },

  content: {
    flexGrow: 1,
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      marginTop: "3.5rem",
    },
  },
  display: {
    position: "fixed",
    width: "75%",
    top: "4.8rem",
    padding: "0 0.2rem ",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      top: "8.4rem",
    },
  },
}));
export default function VideoCall() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <SideNav
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <main className={classes.content}>
        <ChatHeader />
        <div className={classes.display}>
          <Video />
          <Video />
        </div>
        <CallControls />
      </main>
    </div>
  );
}
