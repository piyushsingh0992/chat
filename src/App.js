import React, { useState } from "react";
import "./App.css";
import Chat from "./container/chat";
import Contacts from "./container/contacts";
import Error from "./container/error";
import Home from "./container/home";
import Login from "./container/login";
import Setting from "./container/setting";
import VideoCall from "./container/videoCall";
import VoiceCall from "./container/voiceCall";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="APP">
      <Routes>
        <Route path="/" element={<Chat />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />

        <Route path="/setting" element={<Setting />} />
        <Route path="/videoCall/:videoCallId" element={<VideoCall />} />
        <Route path="/voiceCall/:voiceCallId" element={<VoiceCall />} />

        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
