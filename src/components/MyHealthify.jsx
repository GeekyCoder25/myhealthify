import styled from 'styled-components';
import Card from '../components/UI/Card';
import yesWhite from '../assets/yes-white.png';
import noWhite from '../assets/no-white.png';
import CustomButton from '../components/CustomButton';

const MyHealthify = () => {
	return (
		<Card
			style={{
				marginTop: '2rem',
				width: '25rem',
				background: '#181059',
			}}
		>
			<Wrapper>
				<h5 className="basic">MyHealthify</h5>

				<p className="info">
					It provides cash support to the all individual insured against all
					cases of minor disease diagnosis that may occur in the future. Family
					or Co-operate group.
				</p>

				<div className="enjoy">
					<div className="en-container">
						<img src={yesWhite} alt="" /> <span>%25 cash back</span>
					</div>
					<div className="en-container">
						<img src={yesWhite} alt="" />
						<span>N100.000 Coverage Amount</span>
					</div>
					<div className="en-container">
						<img src={yesWhite} alt="" />
						<span>N100.000 Coverage Amount</span>
					</div>
					<div className="en-container">
						<img src={yesWhite} alt="" />
						<span>N100.000 Coverage Amount</span>
					</div>
					<div className="en-container">
						<img src={yesWhite} alt="" />
						<span>N100.000 Coverage Amount</span>
					</div>
					<div className="en-container">
						<img src={noWhite} alt="" />
						<span style={{ textDecoration: 'line-through' }}>
							3 Year Freemium
						</span>
					</div>
				</div>

				<div className="btn-container">
					<CustomButton children="Use Mega Calculator" />
				</div>
			</Wrapper>
		</Card>
	);
};

const Wrapper = styled.section`
	color: #fff;
	font-size: 14px;
	padding-top: 1rem;
	padding-bottom: 1rem;

	.basic {
		font-weight: bold;
	}

	.info {
		margin-bottom: 1rem;
	}

	.enjoy {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1rem;

		.en-container {
			display: flex;
			gap: 0.5rem;
			align-items: center;
		}
	}

	.price {
		opacity: 0.6;
		font-size: 1.7rem;
		font-weight: bold;

		span {
			font-size: 1rem;
		}
	}

	.upgrade-text {
		margin-top: 1rem;
		background-color: #181059;
		color: #fff;
		font-size: 13px;
		padding: 1rem 0.5rem;
		border-radius: 4px;
	}

	.btn-container {
		button {
			width: 100%;
			margin-top: 1rem;
		}
	}
`;

export default MyHealthify;
