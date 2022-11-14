import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Navbar from '../layouts/navbar/Navbar';
import Sidebar from '../layouts/sidebar/Sidebar';
import MainContent from '../layouts/MainContent/MainContent';
import PatientImg from '../components/profile-card/PatientImg';
import DoctorDetails from '../components/DoctorDetails';
import Ratings from '../components/Ratings';
import Card from '../components/UI/Card';
import CustomButton from '../components/CustomButton';

const ViewDetails = () => {
	const params = useParams();
	const navigate = useNavigate();

	return (
		<>
			<Navbar />
			<Layout>
				<Sidebar />
				<MainContent>
					<aside>
						<Card>
							<Wrapper>
								<p
									style={{ color: '#EE7F00', cursor: 'pointer' }}
									onClick={() => {
										navigate('/clinic');
									}}
								>
									back
								</p>
								<div className="patient-whole">
									<div>
										<PatientImg />
									</div>

									<div className="details">
										<h5>{params.detailsId}</h5>
										<p style={{ color: '#8C92AB', marginTop: '-0.5rem' }}>
											General Physician
										</p>

										<div className="exp-container">
											<Ratings ratings={4.5} className="rat" />
											<p className="exp">5 years of experience</p>
										</div>

										<div>
											<CustomButton
												style={{ width: '180px', height: '3rem' }}
												children=" see the doctor"
											/>
										</div>
									</div>
								</div>
							</Wrapper>

							<Cover>
								<DoctorDetails />
							</Cover>
						</Card>
					</aside>
				</MainContent>
			</Layout>
		</>
	);
};

const Wrapper = styled.section`
	.patient-whole {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1rem;

		.exp-container {
			display: flex;
			margin-top: 1rem;

			.rat {
				padding-right: 1rem;
			}

			.exp {
				border-left: solid 2px #8c92ab;
				padding-left: 1rem;
			}

			p {
				color: #8c92ab;
			}
		}

		h5 {
			margin: 0;
		}
	}
`;

const Cover = styled.div`
	width: 558px;
	overflow: scroll;
	padding: 1rem;
	padding-bottom: 2rem;
	background: #ffffff;
	border: 1px solid rgba(140, 146, 171, 0.4);
	box-shadow: 0px 1.1003px 3.30091px rgba(5, 16, 55, 0.1);
	border-radius: 6px;

	margin: 0 auto;
	margin-top: 2rem;
`;
export default ViewDetails;
