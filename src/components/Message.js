import React from 'react';
import { AUTHORS } from './../const/const';

const getMessageClassName = (author) => {
  return `message ${author === AUTHORS.BOT ? "bot-message" : "human-message"}`;
};

export const Message = ({ text, author }) => (
  <div className={getMessageClassName(author)}>
    {author}: {text}
  </div>
);