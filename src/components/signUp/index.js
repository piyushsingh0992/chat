import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import logo from "../../assets/logo/chat.png";
import { useStyles } from "./style.js";
import { useInputChange } from "../../customHooks/inputChange.js";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { signUp } from "../../container/login/authSlice";
import { toast } from "react-toastify";
import { successSignUp } from "./common.js";
import { check } from "../../utils/common";
export default function SignUp({
  currentUserSetter,
  signUpDetails,
  signUpDetailsSetter,
  signInDetailsSetter,
}) {
  const classes = useStyles();
  const [loader, loaderSetter] = useState(false);
  const handleChange = useInputChange(signUpDetailsSetter);
  const dispatch = useDispatch();

  let auth = useSelector((state) => state.auth);

  const successSignUpProps = {
    signUpDetails,
    signUpDetailsSetter,
    signInDetailsSetter,
    currentUserSetter,
  };
  useEffect(() => {
    if (loader) {
      if (auth.status === "fullfilled") {
        successSignUp(successSignUpProps);
        toast.success(auth.message);
        loaderSetter(false);
      } else if (auth.status === "rejected") {
        toast.error(auth.message);
       
        loaderSetter(false);
      }
    }
  }, [auth.status]);

  function submitHandler() {
    loaderSetter(true);
    if (check(signUpDetails)) {
      
      toast.error("Please Fill in all the details");
   
      loaderSetter(false);
      return;
    }
    dispatch(signUp(signUpDetails));
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img src={logo} className={classes.logo} />
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <form className={classes.form} noValidate>
          <TextField
            required={true}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            value={signUpDetails.name}
            name="userName"
            autoFocus
            onChange={handleChange}
          />
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
            value={signUpDetails.email}
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
            value={signUpDetails.password}
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
            {loader ? <CircularProgress size={28} /> : "Sign Up"}
          </Button>
          <Grid container alignItems="center" justify="center">
            <Grid
              item
              xs={8}
              onClick={() => {
                window.location.hash = "signIn";
                currentUserSetter((value) => !value);
                signUpDetailsSetter({
                  userName: "",
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
                Already have an account? Sign In
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
