import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxHeight: "80vh",
      padding: 0,
      paddingTop: "155px",
    },
  
    chatItem: {
      backgroundColor: theme.palette.background.main,
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(2),
    },
    avatar: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  