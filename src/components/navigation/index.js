import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    border: "none",
    boxShadow: "none",
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  currentUseravatar: {
    height: 50,
    width: 50,
    background: "red",
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.currentUseravatar}>
            R
          </Avatar>
        }
        action={
          <ExpandMoreIcon
            style={{ height: "30px", width: "30px", marginTop: "1rem" }}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
          />
        }
        title="Shrimp and Chorizo Paella"
      />
      <Divider />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List style={{ marginLeft: "0.5rem" }}>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text} style={{}}>
              <ListItemIcon style={{ minWidth: "40px" }}>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Card>
  );
}
