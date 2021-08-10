import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import UploadImage from "../uploadImage";
const useStyles = makeStyles((theme) => ({
  avatar: {
    background: theme.palette.primary.main,
    height: "20rem",
    width: "20rem",
  },
}));
export default function EditAvatar({ userDetails, userDetailsSetter }) {
  const classes = useStyles();

  const auth = useSelector((state) => state.auth);

  return (
    <Badge
      badgeContent={<UploadImage userDetailsSetter={userDetailsSetter} />}
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
  );
}
