import React, { useState, useEffect } from "react";
import "./App.css";
import Chat from "./container/chat";
import Contacts from "./container/contacts";
import Error from "./container/error";
import Home from "./container/home";
import Login from "./container/login";
import Setting from "./container/setting";
import VideoCall from "./container/videoCall";
import VoiceCall from "./container/voiceCall";
import CallModal from "./components/callModal";
import { Routes, Route, useNavigate } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setupAuthHeader, setupAuthExceptionHandler } from "./utils/common";
import { signInfromLocalStorage } from "./container/login/authSlice";
import { useDispatch } from "react-redux";
import useLogout from "./customHooks/logout";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = useLogout();
  useEffect(() => {
    let userDetails = JSON.parse(localStorage.getItem("chatUserDetails"));
    if (userDetails) {
      setupAuthHeader(userDetails.token);
      dispatch(signInfromLocalStorage(userDetails));
      setupAuthExceptionHandler(logout, navigate);
    }
  }, []);
  return (
    <div className="APP">
      <CallModal />
      <ToastContainer />
      <Routes>
        <PrivateRoute path="/" element={<Home />} />
        <PrivateRoute path="/chat/:chatId" element={<Chat />} />
        <PrivateRoute path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/setting" element={<Setting />} />
        <PrivateRoute path="/videoCall/:videoCallId" element={<VideoCall />} />
        <PrivateRoute path="/voiceCall/:voiceCallId" element={<VoiceCall />} />

        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
