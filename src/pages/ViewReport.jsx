import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/UI/Card';
import Layout from '../layouts/Layout';
import MainContent from '../layouts/MainContent/MainContent';
import Navbar from '../layouts/navbar/Navbar';
import Sidebar from '../layouts/sidebar/Sidebar';
const ViewReport = () => {
	const navigate = useNavigate();

	const handleClose = () => {
		navigate('/history');
	};

	return (
		<>
			<Navbar />
			<Layout>
				<Sidebar />
				<MainContent>
					<Card style={{ width: '40rem', margin: '0 auto' }}>
						<Wrapper>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p>Your Doctor’s Report</p>
								<div className="cancel">
									<span onClick={handleClose}>&times;</span>
								</div>
							</div>

							<div className="comment">
								<h5>Summary</h5>

								<Card style={{ backgroundColor: '#F0F2F6' }}>
									<div>
										<h5>Comments:</h5>
										<p>
											Please try to stay away from people that disturb your
											health, avoid all sort of alcoholic drinks, and take a
											good rest.
										</p>
									</div>
									<div>
										<h5>Drugs:</h5>
										<ul>
											<li>Paracetamol (80g) 2-2-2</li>
											<li>Paracetamol (80g) 2-2-2</li>
											<li>Paracetamol (80g) 2-2-2</li>
										</ul>
									</div>
								</Card>
							</div>
						</Wrapper>
					</Card>
				</MainContent>
			</Layout>
		</>
	);
};

const Wrapper = styled.article`
	position: relative;
	.cancel {
		position: absolute;
		font-size: 2rem;
		display: flex;
		justify-content: end;
		width: 100%;

		h5 {
			font-weight: bold;
		}

		span {
			cursor: pointer;
		}
	}
	.comment {
		margin-top: 2rem;

		h5 {
			font-weight: bold;
		}
	}
`;
export default ViewReport;
