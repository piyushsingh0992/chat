import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style.js";
import Container from "@material-ui/core/Container";
import logo from "../../assets/logo/chat.png";
import { useInputChange } from "../../customHooks/inputChange.js";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../container/login/authSlice";
import { toast } from "react-toastify";
import { check } from "../../utils/common";
import CircularProgress from "@material-ui/core/CircularProgress";
export default function SignIn({
  currentUserSetter,
  signInDetails,
  signInDetailsSetter,
}) {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loader, loaderSetter] = useState(false);
  const handleChange = useInputChange(signInDetailsSetter);

  useEffect(() => {
    if (loader) {
      if (auth.status === "fullfilled") {
        loaderSetter(false);
      } else if (auth.status === "rejected") {
        toast.error(auth.message);
        loaderSetter(false);
      }
    }
  }, [auth.status]);


  function submitHandler() {
    loaderSetter(true);
    if (check(signInDetails)) {
      
      toast.error("Please Fill in all the details");
      loaderSetter(false);
      return;
    }
    dispatch(signIn(signInDetails));
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img src={logo} className={classes.logo} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form className={classes.form} noValidate>
          <TextField
            required={true}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={signInDetails.email}
            onChange={handleChange}
          />
          <TextField
            required={true}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={signInDetails.password}
            onChange={handleChange}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
            disabled={loader}
          >

{loader ? <CircularProgress size={28} /> : " Sign In"}
           
          </Button>
          <Grid container alignItems="center" justify="center">
            <Grid
              item
              xs={8}
              onClick={() => {
                window.location.hash = "signUp";
                currentUserSetter((value) => {
                  return !value;
                });

                signInDetailsSetter({
                  password: "",
                  email: "",
                });
              }}
            >
              <Typography
                component="p"
                color="primary"
                variant="p"
                style={{
                  cursor: "pointer",
                }}
              >
                Don't have an account? Sign Up
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
