import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    position: "relative",
    top: "3.5rem",

    display: "flex",
    alignItems: "center",
    zIndex:0,
    margin:"1rem 1rem",
    [theme.breakpoints.down("xs")]: {
      top: "3rem",
    },
  },
  searchIconContainer: {
    padding: theme.spacing(2),

    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    fontSize: "2rem",
    margin:"0 1rem"
  },
  inputRoot: {
    color: "inherit",
    minWidth: "90%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    transition: theme.transitions.create("width"),
    minWidth: "90%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
