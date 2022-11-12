import styled from "styled-components";

function Card({ children, style }) {
  return <Wrapper style={style}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(5, 16, 55, 0.1);
  border-radius: 10px;
  gap: 5px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export default Card;
