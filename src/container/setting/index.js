import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../components/navBar";
import SideNav from "../../components/sideNav";
import ThemeToggle from "../../components/themeToggle";
import { useSelector } from "react-redux";
import EditAvatar from "../../components/editAvatar";
import EditUserDetails from "../../components/editUserDetails";
import { toast } from "react-toastify";
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

  useEffect(() => {
    if (auth.status === "fullfilled") {
      userDetailsSetter({
        email: auth.email,
        userName: auth.userName,
        userImage: auth.userImage,
      });
      toast.success(auth.message);
    } else if (auth.status === "rejected") {
      userDetailsSetter({
        email: auth.email,
        userName: auth.userName,
        userImage: auth.userImage,
      });
      toast.error(auth.message);
    
    }
  }, [auth]);

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
        <EditAvatar
          userDetails={userDetails}
          userDetailsSetter={userDetailsSetter}
        />
        <EditUserDetails
          userDetails={userDetails}
          userDetailsSetter={userDetailsSetter}
        />
      </main>
    </div>
  );
}
