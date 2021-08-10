import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  chatItem: {
    borderBottom: `1px solid ${theme.palette.background.secondary}`,
    padding: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
