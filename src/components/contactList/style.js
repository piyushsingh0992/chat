import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxHeight: "80vh",
      padding: 0,
      marginTop: "3.5rem",
      [theme.breakpoints.down("xs")]: {
        marginTop: "3rem",
      },
    },
  

  }));