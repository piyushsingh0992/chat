import React, {  useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./style.js";
const Search = () => {

  const [searchTerm, searchTermSetter] = useState("");
 
  const classes = useStyles();
  return (
    <div className="search">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={(e) => {
            searchTermSetter(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
