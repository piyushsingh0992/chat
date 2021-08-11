import React, { useEffect } from "react";
import "./App.css";
import Chat from "./container/chat";
import Contacts from "./container/contact";
import Error from "./container/error";
import Home from "./container/home";
import Login from "./container/login";
import Setting from "./container/setting";
import VideoCall from "./container/videoCall";
import VoiceCall from "./container/voiceCall";
import CallModal from "./components/callModal";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInfromLocalStorage } from "./container/login/authSlice";
import { useSelector, useDispatch } from "react-redux";
import useLoadingChatandContact from "./customHooks/loadingChatandContact";

import socketClient from "socket.io-client";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const loadChatandContact = useLoadingChatandContact();
  const SERVER = "https://chat.piyushsingh6.repl.co/";
  

  useEffect(() => {
    let userDetails = JSON.parse(localStorage.getItem("chatUserDetails"));
    if (userDetails) {
      dispatch(signInfromLocalStorage(userDetails));
    }
  }, []);

  useEffect(() => {
    loadChatandContact(auth.token);
  }, [auth.token]);

  useEffect(() => {
    if (auth.status === "fullfilled") {
      
      var socket = socketClient(SERVER);
      socket.on("connection", () => {
        console.log(`I'm connected with the back-end`);
      });
    }
  }, [auth]);

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
