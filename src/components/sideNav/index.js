import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChatList from "../chatList";
import UserHeader from "../userHeader";
const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  drawerPaper: {
    backgroundColor: theme.palette.background.main,
    width: drawerWidth,
    display: "flex",
    flexDirection: "columnn",
  },
}));

export default function SideNav({ handleDrawerToggle, mobileOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <UserHeader />
          <ChatList />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <UserHeader />

          <ChatList />
        </Drawer>
      </Hidden>
    </nav>
  );
}
