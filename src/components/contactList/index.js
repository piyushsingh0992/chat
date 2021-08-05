import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: "80vh",
    padding: 0,
    marginTop: "3.5rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "3rem",
    },
  },

  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: "60px",
    width: "60px",
    marginRight: "1rem",
  },
  chatItem: {
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(1,2),
  },
  delete: {
    transform: "scale(1.2)",
  },
}));

function generate(element) {
  return [0,2,2,2,2,2,2,2,2,2,2,].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <List dense={dense} className={classes.root}>
      {generate(
        <ListItem className={classes.chatItem}>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h6">All Contacts</Typography>}
            secondary={<Typography variant="p">All Contacts</Typography>}
          />
          <ListItemSecondaryAction>
            <Tooltip title="Delete Contact" aria-label="add">
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon className={classes.delete} />
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </List>
  );
}
