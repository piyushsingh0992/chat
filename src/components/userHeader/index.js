import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import Search from "../searchChat";
import Navigation from "../navigation";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "none",
    alignItems: "center",
    background: theme.palette.common.white,
    borderRadius: 0,
    position: "fixed",
    top: 0,
    zIndex: 1000,
    maxWidth: "339px",
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
  let auth = useSelector((state) => state.auth);
  return auth.status === "fullfilled" ? (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          auth.userImage ? (
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={auth.userImage}
            />
          ) : (
            <Avatar aria-label="recipe" className={classes.avatar}>
              <Typography variant="h4">{auth.userName.slice(0, 1)}</Typography>
            </Avatar>
          )
        }
        action={<Navigation />}
        titleTypographyProps={{ variant: "h6" }}
        title={auth.userName}
        className={classes.header}
      />

      <CardContent className={classes.content}>
        <Search />
      </CardContent>
    </Card>
  ) : (
    <CircularProgress />
  );
}
