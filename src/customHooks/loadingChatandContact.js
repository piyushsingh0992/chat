import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLogout from "./logout";
import { getAllChats } from "../container/chat/chatSlice";
import { getAllContacts } from "../container/contact/contactSlice";
import { setupAuthHeader, setupAuthExceptionHandler } from "../utils/common";
export default function useLoadingChatandContact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = useLogout();
  const chat = useSelector((state) => state.chat);
  const contact = useSelector((state) => state.contact);

  return function (token) {
    
    if (token) {
      if (chat.status === "idle") {
        dispatch(getAllChats());
      }
      if (contact.status === "idle") {
        dispatch(getAllContacts());
      }
      setupAuthHeader(token);
      setupAuthExceptionHandler(logout, navigate);
    }
  };
}
