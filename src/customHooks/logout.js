import { useDispatch } from "react-redux";
import { resetauthSlice } from "../container/login/authSlice";
import { setupAuthHeader } from "../utils/common";
import { resetChatSlice } from "../container/chat/chatSlice";
import { resetContactsSlice } from "../container/contact/contactSlice";
export default function useLogout() {
  const dispatch = useDispatch();
  return function () {
    dispatch(resetauthSlice());
    dispatch(resetChatSlice());
    dispatch(resetContactsSlice());
    setupAuthHeader(null);
    localStorage.removeItem("chatUserDetails");
  };
}
