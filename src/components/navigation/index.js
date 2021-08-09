import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SettingsIcon from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import  useLogout  from "../../customHooks/logout";
const useStyles = makeStyles((theme) => ({
  action: {
    marginTop: "1rem",
  },
  icon: {
    marginRight: 10,
    color: theme.palette.primary.main,
  },
  text: {
    color: theme.palette.primary.main,
  },
}));
export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const logout = useLogout();

  function logoutHandler() {
    setAnchorEl(null);
    logout();
  }

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.action}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <PermContactCalendarIcon className={classes.icon} />
          <Typography variant="p" className={classes.text}>
            All Contacts
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AddBoxIcon className={classes.icon} />
          <Typography variant="p" className={classes.text}>
            Create Group
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SettingsIcon className={classes.icon} />
          <Typography variant="p" className={classes.text}>
            Setting
          </Typography>
        </MenuItem>

        <MenuItem onClick={logoutHandler}>
          <ExitToAppRoundedIcon className={classes.icon} />
          <Typography variant="p" className={classes.text}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
