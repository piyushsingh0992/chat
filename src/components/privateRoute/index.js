import React from "react";
import { useParams, Navigate, Route } from "react-router-dom";
import { getNewPath } from "../../utils/common";
import { useSelector,useDispatch } from "react-redux";
const PrivateRoute = ({ path, ...props }) => {
  let paramsArray = useParams();
  let newPath = getNewPath(path, paramsArray);
  let token = useSelector((state) => state.auth.token);
  return token ? (
    <Route to={path} {...props} />
  ) : (
    <Navigate state={{ from: newPath }} replace to="/login" />
  );
};

export default PrivateRoute;
