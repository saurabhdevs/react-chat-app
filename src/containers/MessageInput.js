import React from "react";
import store from "../store";
//import { setTypingValue } from "../actions";
import { setTypingValue, sendMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {

  const state = store.getState(); 
  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };
  
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;