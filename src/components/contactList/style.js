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
  
    avatar: {
      backgroundColor: theme.palette.primary.main,
      height: "60px",
      width: "60px",
      marginRight: "1rem",
    },
    chatItem: {
      backgroundColor: theme.palette.background.default,
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(1,2),
    },
    delete: {
      transform: "scale(1.2)",
    },
  }));