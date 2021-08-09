import axios from "axios";
export function getNewPath(path, paramsArray) {
  let pathArray = path.split(":");
  let newArray = pathArray.map((item) => {
    if (paramsArray[item]) {
      return paramsArray[item];
    }
    return item;
  });
  return newArray.join("");
}

export function check(details) {
  let check = Object.keys(details).reduce((state, action) => {
    if (details[action].length > 0) {
      return state + 1;
    } else {
      return state + 0;
    }
  }, 0);

  return check !== Object.keys(details).length;
}

export const setupAuthHeader = (token) => {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
};

export const setupAuthExceptionHandler = (logout, navigate) => {
  const UNAUTHORIZED = 401;
  const PAGE_NOT_FOUND = 404;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        logout();
        navigate("login");
      }

      if (error?.response?.status === PAGE_NOT_FOUND) {
        navigate("PAGE NOT FOUND");
      }
      return Promise.reject(error);
    }
  );
};
