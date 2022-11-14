import styled from 'styled-components';
import Layout from '../layouts/Layout';
import MainContent from '../layouts/MainContent/MainContent';
import Navbar from '../layouts/navbar/Navbar';
import Sidebar from '../layouts/sidebar/Sidebar';
import faq from '../assets/faq.png';
import { useNavigate } from 'react-router-dom';
const Support = () => {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<Layout>
				<Sidebar />
				<MainContent>
					<Wrapper>
						<header>
							<div>
								<h1>Frequently Asked Questions</h1>
								<p>
									If you can’t find an answer, please mail support@myhealthi.ai
								</p>
							</div>
							<button>My Plan</button>
						</header>
					</Wrapper>
				</MainContent>
				<div
					onClick={() => navigate('/support')}
					style={{
						position: 'fixed',
						right: '20px',
						bottom: '50px',
						cursor: 'pointer',
					}}
				>
					<img src={faq} alt="faq" />
				</div>
			</Layout>
		</>
	);
};

const Wrapper = styled.div`
	> header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	> header h1 {
		font-weight: 600;
	}
	button {
		padding: 10px 32px;
		background: #03053d;
		border-radius: 100px;
		color: #fff;
		font-weight: 600;
	}
`;

export default Support;
