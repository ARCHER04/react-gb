import React, { useState, useEffect, useCallback } from "react";
import { Form } from "./components/form.js";
import { AUTHORS } from "./const/const.js";


const initialMessages = [
    { author: AUTHORS.HUMAN, text: "Hello" },
    { author: AUTHORS.BOT, text: "hi" },
];

const getMessageClassName = (author) => {
    return `message ${author === AUTHORS.BOT ? "bot-message" : "human-message"}`;
};

const App = (props) => {
    const [messages, setMessages] = useState(initialMessages);

    const handleAddMessage = useCallback((newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    }, []);


    useEffect(() => {
        if (!messages.length) {
            return;
        }

        const lastMessage = messages[messages.length - 1];
        if (lastMessage.author === AUTHORS.HUMAN) {
            handleAddMessage({ author: AUTHORS.BOT, text: "I AM BOT" });
        }

    }, [messages]);

    return (
        <div>
            {messages.map((message, i) => (
                <div key={i} className={getMessageClassName(message.author)}>
                    {message.author}: {message.text}
                </div>
            ))}
            {<Form onAddMessage={handleAddMessage} />}
        </div>
    );
};
export default App;