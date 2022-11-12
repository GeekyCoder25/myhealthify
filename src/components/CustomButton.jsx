import React from "react";
import styled from "styled-components";

function CustomButton({ children, onClick, bg, style }) {
  return (
    <Button onClick={onClick} bg={bg} style={style}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  border: none;
  border-radius: 40px;
  background-color: ${(props) => props.bg || "#0e9f6b"};
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  width: 130px;
  height: 50px;
`;

export default CustomButton;
