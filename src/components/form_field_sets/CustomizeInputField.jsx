import React from "react";
import styled from "styled-components";

function CustomizeInputField({ type, name, placeholder }) {
  return (
    <Input>
      <label htmlFor={name}>{name}</label>
      <input type={type} placeholder={placeholder} id={name} required />
    </Input>
  );
}

const Input = styled.div`
  color: #313545;
  label {
    font-weight: 500;
    font-size: 16px;
  }
  input {
    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(3, 5, 61, 0.2);
    border-radius: 8px;
    width: 100%;
    padding: 0.7rem 0.5rem;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  input::placeholder {
    font-weight: 300;
  }
`;

export default CustomizeInputField;
