
import React, { useState } from "react";
import icon from "../../assets/logo/chat.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../components/navBar";
import SideNav from "../../components/sideNav"
import Typography from "@material-ui/core/Typography";;

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

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  icon: {
    height: "10rem",
    margin:"5rem 0"
  },
  
}));
export default function Home() {
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
        <Typography variant="h3" noWrap >
          Welcome To chat
        </Typography>
        <img src={icon} className={classes.icon} />
      </main>
    </div>
  );
}
