import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../components/navBar";
import SideNav from "../../components/sideNav";
import Typography from "@material-ui/core/Typography";
import errorIcon from "../../assets/images/error.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    color:theme.palette.primary.main
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
    margin: "2rem 0",
  },
}));
export default function Error() {
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
        <img src={errorIcon} className={classes.icon} />
        <Typography variant="h2" noWrap>
          Page not Found
        </Typography>
      </main>
    </div>
  );
}
