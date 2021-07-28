import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../components/navBar";
import SideNav from "../../components/sideNav";
import ChatHeader from "../../components/chatHeader";
import CallControls from "../../components/callControls";
import Avatar from "@material-ui/core/Avatar";

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
    top: "4.7rem",
    overflowY: "scroll",
    overflowX: "hidden",
    minHeight: "76vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.secondary,

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      top: "8.3rem",
      minHeight: "65vh",
    },
  },

  avatar: {
    height: "270px",
    width: "270px",

    [theme.breakpoints.down("xs")]: {
      height: "230px",
      width: "230px",
    },
  },
}));
export default function VoiceCall() {
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
          <Avatar className={classes.avatar}>P</Avatar>
        </div>
        <CallControls />
      </main>
    </div>
  );
}
