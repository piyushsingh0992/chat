import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useInputChange } from "../../customHooks/inputChange.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDetails } from "../../container/login/authSlice";
export default function EditUserDetails({
  userDetails,
  userDetailsSetter,
  loader,
  loaderSetter,
}) {
  const changeHandler = useInputChange(userDetailsSetter);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  function clickHanlder() {
    loaderSetter(true);
    dispatch(updateUserDetails(userDetails));
  }

  useEffect(() => {
    if (auth.status === "fullfilled") {
      loaderSetter(false);
    } else if (auth.status === "rejected") {
      loaderSetter(false);
    }
  }, [auth]);
  return (
    <form noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="userName"
        label="UserName"
        name="userName"
        autoFocus
        value={userDetails.userName}
        onChange={changeHandler}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="email"
        label="Email"
        id="email"
        value={userDetails.email}
        onChange={changeHandler}
      />

      <Button
        disabled={loader}
        fullWidth
        variant="contained"
        color="primary"
        onClick={clickHanlder}
      >
        {loader ? <CircularProgress size={28} /> : "Save"}
      </Button>
    </form>
  );
}
