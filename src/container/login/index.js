import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setupAuthHeader, setupAuthExceptionHandler } from "../../utils/common";
import useLogout from "../../customHooks/logout";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default function Login() {
  const classes = useStyles();
  const [currentUser, currentUserSetter] = useState(true);
  const navigate = useNavigate();
  const { state } = useLocation();
  const logout = useLogout();
  const auth = useSelector((state) => state.auth);
  const [signInDetails, signInDetailsSetter] = useState({
    password: "",
    email: "",
  });
  const [signUpDetails, signUpDetailsSetter] = useState({
    userName: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    if (auth.token) {
      setupAuthHeader(auth.token);
      setupAuthExceptionHandler(logout, navigate);
      navigate(state && state.from ? state.from : "/");
    }
  }, [auth.token]);

  useEffect(() => {

    if (window.location.hash === "#signUp") {
      currentUserSetter(false);
    }
  }, []);

  return (
    <div className={classes.root}>
      {currentUser ? (
        <SignIn
          currentUserSetter={currentUserSetter}
          signInDetails={signInDetails}
          signInDetailsSetter={signInDetailsSetter}
        />
      ) : (
        <SignUp
          currentUserSetter={currentUserSetter}
          signUpDetails={signUpDetails}
          signUpDetailsSetter={signUpDetailsSetter}
          signInDetailsSetter={signInDetailsSetter}
        />
      )}
    </div>
  );
}
