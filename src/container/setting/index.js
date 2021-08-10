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
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
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
    background: theme.palette.primary.main,
    height: "20rem",
    width: "20rem",
  },
  icon: {
    background: "white",
    "&:hover": {
      background: "white",
    },
  },
}));
export default function Setting() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const auth = useSelector((state) => state.auth);
  const [userDetails, userDetailsSetter] = useState({
    email: auth.email,
    userName: auth.userName,
    userImage: auth.userImage,
  });
  debugger;

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
          {userDetails.userImage ? (
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={userDetails.userImage}
            />
          ) : (
            <Avatar aria-label="recipe" className={classes.avatar}>
              <Typography variant="h1">
                {userDetails.userName.slice(0, 1)}
              </Typography>
            </Avatar>
          )}
        </Badge>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="userName"
            label="UserName"
            name="userName"
            autoFocus
            value={userDetails.userName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="email"
            label="Email"
            id="email"
            value={userDetails.email}
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
