import Layout from '../layouts/Layout';
import MainContent from '../layouts/MainContent/MainContent';
import Navbar from '../layouts/navbar/Navbar';
import Sidebar from '../layouts/sidebar/Sidebar';
import UserDashborad from '../components/UserDashboard/UserDashboard';
// import ProfileCard from '../components/profile-card/ProfileCard';
import faq from '../assets/faq.png';
import { useNavigate } from 'react-router-dom';

// import Filter from '../components/Filter';

// const availableDoctors = [
// 	{
// 		healthifyID: 'MyHealthify ID Number',
// 		role: 'General Physician',
// 		hospital: 'UITH',
// 		details: 'View details',
// 		ratings: 4.5,
// 	},
// 	{
// 		healthifyID: 'Dr. Kolawole Adewole',
// 		role: 'General Physician',
// 		hospital: 'UITH',
// 		details: 'View details',
// 		ratings: 4.2,
// 	},
// 	{
// 		healthifyID: 'Dr. Ali Ahmad',
// 		role: 'General Physician',
// 		hospital: 'UITH',
// 		details: 'View details',
// 		ratings: 4.7,
// 	},
// 	{
// 		healthifyID: 'Dr. Masturoh Ajoke',
// 		role: 'General Physician',
// 		hospital: 'UITH',
// 		details: 'View details',
// 		ratings: 4.9,
// 	},
// ];

const userData = [
	{
		id: 'MyHealthify ID Number',
		number: 'MH34587-2022',
		balance: 500,
		saved: 200.0,
		spent: 50.0,
	},
];
const Clinic = () => {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<Layout>
				<Sidebar />
				<MainContent>
					<UserDashborad userData={userData} />
					{/* <Wrapper>
						<div className="head">
							<h3>Welcome Back, Daniel</h3>
							<p
								style={{
									fontSize: '14px',
									color: '#8C92AB',
									marginTop: '-5px',
								}}
							>
								Last Login at 2022-09-24 22:15:35
							</p>
						</div>

						<div className="doctors">
							<div>
								<h4 style={{ fontWeight: 'bold' }}>Available doctors</h4>
							</div>

							<Filter />

							<div>
								<p style={{ color: '#8C92AB' }}>all 4 doctors for you</p>
							</div>
						</div>

						<div className="profileContainer">
							{availableDoctors.map((patient, index) => {
								const { healthifyID, role, details, hospital, ratings } = patient;
								return (
									<ProfileCard
										key={index}
										healthifyID={healthifyID}
										role={role}
										hospital={hospital}
										details={details}
										ratings={ratings}
									/>
								);
							})}
						</div>
					</Wrapper> */}
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

export default Clinic;
