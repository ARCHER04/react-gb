import React, {  useCallback } from "react";
import { Form } from "./form";
import { Message } from "./Message";
import { ChatList } from "./ChatList";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  addMessageWithThunk } from "./../store/messages/actions";


const App = () => {
  const messages = useSelector(state => state.messages.messagesList);
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleAddMessage = useCallback(
    (newMessage) => {
      dispatch(addMessageWithThunk(newMessage, chatId));
    },
    [chatId, dispatch]
  );

  if (!chatId || !messages[chatId]) {
    return <Redirect to="/" />;
  }

  return (
    <div >
      <ChatList />
      <div>
        {messages[chatId].map((message, i) => (
          <Message text={message.text} author={message.author} key={i} />
        ))}
        <Form onAddMessage={handleAddMessage} />
      </div>
    </div>
  );
};

export default App;