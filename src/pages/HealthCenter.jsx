import Layout from '../layouts/Layout';
// import { useNavigate } from 'react-router-dom';
import Navbar from '../layouts/navbar/Navbar';
import Sidebar from '../layouts/sidebar/Sidebar';
import MainContent from '../layouts/MainContent/MainContent';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import faq from '../assets/faq.png';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/aromo.png';
const HealthCenter = () => {
	const navigate = useNavigate();
	// const navigate = useNavigate();

	const healthData = [
		{
			icon: '/assets/healthcentericon1.png',
			name: 'Hospital',
			img: '/assets/healthcenteryusjib.png',
			title: 'YUSJIB',
			distance: '20km away',
			link: '/',
		},
		{
			icon: '/assets/healthcentericon2.png',
			name: 'Pharmacy',
			img: '/assets/aromo.png',
			title: 'AROMOKEYE',
			distance: '20km away',
			link: '/',
		},
		{
			icon: '/assets/healthcentericon3.png',
			name: 'myHealthify',
			img: '/assets/healthcentersecretdee.png',
			title: 'SECREETDEE',
			distance: '20km away',
			link: '/',
		},
		{
			icon: '/assets/healthcentericon4.png',
			name: 'Provision Store 	',
			img: '/assets/healthcenteredinwo.png',
			title: 'EDINWO',
			distance: '20km away',
			link: '/',
		},
	];
	return (
		<>
			<img src={logo} alt="" />
			<Navbar />
			<Layout>
				<Sidebar />
				<MainContent>
					<Wrapper>
						<header>
							<div>
								<h1>Our Health Centers Around You</h1>
								<p>You can change your location above to see other options</p>
							</div>
							<button>My Plan</button>
						</header>
						<div>
							{healthData &&
								healthData.map(data => (
									<div key={data.name} className="healthcard">
										<div>
											<img src={data.icon} alt="icon" />
											<p>{data.name}</p>
										</div>
										<div>
											<img src={data.img} alt="img" />
											<h2>{data.title}</h2>
										</div>
										<div>
											<span>{data.distance}</span>
											<Link to={data.link}>GO</Link>
										</div>
									</div>
								))}
						</div>
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
const Wrapper = styled.section`
	> div {
		display: flex;
		justify-content: space-between;
		margin: 3.125rem auto;
		gap: 50px;
		width: 100%;
		overflow-y: scroll;
		scrollbar-width: none;
	}
	> div::-webkit-scrollbar {
		display: none;
	}
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
	.healthcard {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 3%;
		border: 1px solid rgba(3, 5, 61, 0.2);
		border-radius: 10px;
		min-width: 249px;
		height: 296px;
		padding: 40px 0;
	}
	.healthcard div {
		padding: 0 20px;
	}
	.healthcard div:nth-child(1) {
		display: flex;
		border-radius: 10px;
		align-items: center;
	}
	.healthcard div:nth-child(1) img {
		margin-right: 10px;
		background: rgba(238, 127, 0, 0.2);
		border-radius: 10px;
		padding: 5px;
	}
	.healthcard div:nth-child(2) {
		border-bottom: 1px solid rgba(3, 5, 61, 0.2);
		text-align: center;
		img {
			width: 150px;
			height: 150px;
			border-radius: 50%;
			background: #03053d;
		}
	}
	.healthcard div:nth-child(3) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.healthcard a {
		color: #ee7f00;
		text-decoration: none;
		font-weight: 600;
	}
`;
// const Wrapper = styled.article`
// 	position: relative;
// 	.cancel {
// 		position: absolute;
// 		font-size: 2rem;
// 		display: flex;
// 		justify-content: end;
// 		width: 100%;

// 		h5 {
// 			font-weight: bold;
// 		}

// 		span {
// 			cursor: pointer;
// 		}
// 	}
// 	.comment {
// 		margin-top: 2rem;

// 		h5 {
// 			font-weight: bold;
// 		}
// 	}
// `;

export default HealthCenter;
