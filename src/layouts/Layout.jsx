import styled from 'styled-components';

const Layout = ({ children }) => {
	return (
		<>
			<Wrapper>{children}</Wrapper>
		</>
	);
};

const Wrapper = styled.main`
	display: flex;
	height: 100vh;
`;

export default Layout;
