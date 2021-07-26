import "./App.css";
import Button from "@material-ui/core/Button";
import Sidebar from "./components/sidebar";
import Login from "./container/login";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.main,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App" className={classes.root}>
      <Login />
    </div>
  );
}

export default App;
