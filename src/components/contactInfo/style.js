import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: "60px",
    width: "60px",
    marginRight: "1rem",
  },
  chatItem: {
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(1, 2),
  },
  delete: {
    transform: "scale(1.2)",
  },
}));
