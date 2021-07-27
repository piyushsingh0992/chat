import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../components/navBar";
import SideNav from "../../components/sideNav";
import ChatHeader from "../../components/chatHeader";
import Keyboard from "../../components/keyboard";
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
}));
export default function Chat() {
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
        <Keyboard />
      </main>
    </div>
  );
}
