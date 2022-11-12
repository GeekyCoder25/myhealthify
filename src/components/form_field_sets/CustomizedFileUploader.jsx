import React from "react";
import styled from "styled-components";

import Attachmment from "../../assets/attachment.svg";

function CustomizeFileUploader({ name }) {
  return (
    <Input>
      <label htmlFor={name}>{name}</label>
      <div className="d-flex align-items-center">
        <input
          type="file"
          accept=".jpg, .png, .svg"
          id={name}
          className="d-none"
        />
        <input type="text" placeholder="No file chosen" id={name} />
       <label htmlFor={name} className="label--image"> <img src={Attachmment} alt="" /></label>
      </div>
    </Input>
  );
}

const Input = styled.div`
  color: #313545;
  position: relative;
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
  .label--image,img {
    position: absolute;
    right: 10px;
    bottom: 10px
  }
`;

export default CustomizeFileUploader;
