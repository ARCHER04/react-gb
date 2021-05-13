import React, { useState, useEffect, useCallback } from "react";
import { Form } from "./components/form.js";
import { AUTHORS } from "./const/const.js";
import {
    useParams,
    Redirect,
  } from "react-router-dom";


  const initialMessages = {
    chat1: [{ author: AUTHORS.HUMAN, text: "Hello" }],
    chat2: [
      { author: AUTHORS.BOT, text: "hi" },
      { author: AUTHORS.BOT, text: "hi again" },
    ],
  };

const getMessageClassName = (author) => {
    return `message ${author === AUTHORS.BOT ? "bot-message" : "human-message"}`;
};

const App = () => {
    const [messages, setMessages] = useState(initialMessages);

    const params = useParams();
    const { chatId } = params;
  
    const handleAddMessage = useCallback(
      (newMessage) => {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [chatId]: [...prevMessages[chatId], newMessage],
        }));
      },
      [chatId]
    );


    useEffect(() => {
        if (!messages[chatId]?.length) {
          return;
        }

        const lastMessage = messages[chatId][messages[chatId].length - 1];
        if (lastMessage.author === AUTHORS.HUMAN) {
            handleAddMessage({ author: AUTHORS.BOT, text: "I AM BOT" });
        }

    }, [messages]);
    if (!chatId || !messages[chatId]) {
        return <Redirect to="/profile" />
      }
    
      

    return (
        <div>
            {messages[chatId].map((message, i) => (
                <div key={i} className={getMessageClassName(message.author)}>
                    {message.author}: {message.text}
                </div>
                
            ))}
            <Form onAddMessage={handleAddMessage} />
        </div>

    );
};
export default App;