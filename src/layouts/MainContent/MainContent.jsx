import styled from 'styled-components';
// import AIBot from '../../components/AIBot';

const Dashboard = ({ children }) => {
	return (
		<section style={{ width: '100%' }}>
			<Wrapper>{children}</Wrapper>
			{/* <AIBot /> */}
		</section>
	);
};

const Wrapper = styled.section`
	margin: 2rem 3rem;
	position: relative;
`;
export default Dashboard;
