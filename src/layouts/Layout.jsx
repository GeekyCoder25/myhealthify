import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100vh;
`;

export default Layout;
