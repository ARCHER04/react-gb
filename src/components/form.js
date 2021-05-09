
import React, { useState, useRef, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { AUTHORS } from './../const/const';
import styled from 'styled-components';


export const Form = ({ onAddMessage }) => {
    const [text, setText] = useState('');
    const input = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddMessage({ author: AUTHORS.HUMAN, text });
        setText('');
    }

    useEffect(() => {
        input.current.focus();
    }, []);

    useEffect(() => {
        return () => {
        }
    }, []);

    const Input = styled.input`
    font-size: 10px;
    text-decoration: none;
    display: inline-block;
    color: white;
    padding: 10px 15px;
    margin: 5px 10px;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
    background-size: 200% auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    transition: .5s;
    `;

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="standard-basic"
                value={text}
                onChange={handleChange}
                inputRef={input}
            />
            <Input type="submit" />
        </form>
    );
}