import { useDispatch } from "react-redux";
import { resetauthSlice } from "../container/login/authSlice";
import { setupAuthHeader } from "../utils/common";

export default function useLogout() {
  const dispatch = useDispatch();
  return function () {
    dispatch(resetauthSlice());
    setupAuthHeader();
    localStorage.removeItem("chatUserDetails");
  };
}
