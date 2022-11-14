import BasicPlan from '../components/BasicPlan';
import MyHealthify from '../components/MyHealthify';
import Layout from '../layouts/Layout';
import MainContent from '../layouts/MainContent/MainContent';
import Navbar from '../layouts/navbar/Navbar';
import Sidebar from '../layouts/sidebar/Sidebar';
import faq from '../assets/faq.png';
import { useNavigate } from 'react-router-dom';
const Subscription = () => {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<Layout>
				<Sidebar />
				<MainContent>
					<h3>Select Your Plan 💰</h3>
					<p style={{ color: '#8C92AB' }}>
						Please select from the affordable plans below
					</p>
					<div
						className="row"
						style={{
							alignItems: ' center',
							justifyContent: 'center',
							margin: '0 auto',
						}}
					>
						<div className="col-sm-12 col-lg-6">
							<BasicPlan />
						</div>
						<div className="col-sm-12 col-lg-6">
							<MyHealthify />
						</div>
					</div>
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
				</div>{' '}
			</Layout>
		</>
	);
};

export default Subscription;
