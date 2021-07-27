import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../components/navBar";
import SideNav from "../../components/sideNav";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ThemeToggle from "../../components/themeToggle";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },

  content: {
    flexGrow: 1,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "3.5rem",
    },
  },
  avatar: {
    // marginTop:"5rem",
    background:theme.palette.primary.main,
    height: "20rem",
    width: "20rem",
  },
  icon:{
    background:"white"
  }
}));
export default function Setting() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <SideNav
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <main className={classes.content}>
        <ThemeToggle />
        <Badge
          badgeContent={
            <Tooltip title="Edit" aria-label="add">
              <IconButton color="secondary" className={classes.icon}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          }
          overlap="circular"
        >
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        </Badge>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="UserName"
            name="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="UserId"
            type="password"
            id="password"
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </main>
    </div>
  );
}
