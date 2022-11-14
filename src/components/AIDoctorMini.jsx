import styled from 'styled-components';
import robot from '../assets/robot.png';

import Card from '../components/UI/Card';
const AIDoctorMini = () => {
	return (
		<>
			<Wrapper>
				<Card>
					<h3 style={{ margin: '2rem 0' }}>AI Doctor’s Office 🩺</h3>

					<h5 className="greetings">
						Hi <span>Abdulloh!</span> Welcome to my office 🤝. <br /> How are
						you coping with your <br /> headache?
					</h5>

					<div className="input">
						<input type="text" placeholder="Your answer here..." />
					</div>

					<div className="robot">
						<img src={robot} alt="" />
					</div>
				</Card>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	.greetings {
		text-align: center;
		font-size: 1.8rem;
		margin-top: 1rem;

		span {
			font-weight: bold;
		}
	}

	.input {
		display: flex;
		justify-content: center;

		input {
			margin-top: 2rem;
			outline: none;
			border: none;
			background: rgba(255, 255, 255, 0.02);
			border: 1px solid rgba(3, 5, 61, 0.2);
			border-radius: 8px;
			padding: 0.5rem;
			width: 50%;
		}
	}

	.robot {
		display: flex;
		justify-content: end;

		img {
			width: 10rem;
		}
	}
`;

export default AIDoctorMini;
