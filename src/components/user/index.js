import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Search from "../searchChat";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "none",
    alignItems: "center",
    borderBottom: `1px solid rgb(7, 94, 84)`,
    background: theme.palette.background.main,
    borderRadius: 0,
    position: "fixed",
    top: 0,
    zIndex: 1000,
    maxWidth: "330px",
    padding: "10px 0",
  },

  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: "60px",
    width: "60px",
  },
  action: {
    marginTop: "1rem",
  },
  content: {
    padding: "15px !important",
    margin: "0 !important",
  },
  header: {
    padding: "5px 16px",
    margin: "0 ",
  },
}));

export default function User() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" className={classes.action}>
              <MoreVertIcon />
            </IconButton>
          }
          titleTypographyProps={{ variant: "h6" }}
          title="Shrimp "
          className={classes.header}
        />

        <CardContent className={classes.content}>
          <Search />
        </CardContent>
      </Card>
    </div>
  );
}
