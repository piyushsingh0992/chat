import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: "80vh",
    padding: 0,
    paddingTop: "155px",
  },

  chatItem: {
    backgroundColor: theme.palette.background.main,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function generate(element) {
  return [
    0, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1,
    20, 1, 20, 1, 20, 1, 2,
  ].map((value) =>
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
            primary="Single-line item"
            secondary={secondary ? "Secondary text" : null}
          />
           <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
      )}
    </List>
  );
}
