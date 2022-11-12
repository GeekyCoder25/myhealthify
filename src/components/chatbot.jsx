import React from "react";
import CHATBOT from "../assets/Chatbot.png";

function Chatbot() {
  return (
    <div style={{position:'fixed', bottom:'20px', right:'15px'}}>
      <img src={CHATBOT} alt=""  style={{objectFit:'contain'}} width="150"/>
    </div>
  );
}

export default Chatbot;
