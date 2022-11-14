import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ForeStartView from '../../layouts/foreStartView';
import CustomizeInputField from '../../components/form_field_sets/CustomizeInputField';
import CustomButton from '../../components/CustomButton';
import Chatbot from '../../components/chatbot';

import LOGO from '../../assets/logo.svg';

function SignUp() {
	const navigate = useNavigate();
	return (
		<ForeStartView>
			<Container>
				<img src={LOGO} alt="" className="logo" />
				<div className="header">
					<h1>Create Your Membership 💪</h1>
					<p>Just a quick introduction and you see your doctor. Ready?</p>
				</div>
				<form action="">
					<div className="row">
						<div className="col-sm-6 col-md-6 col-lg-6">
							<CustomizeInputField
								type="text"
								name="First Name"
								placeholder="Enter your first name"
							/>
						</div>
						<div className="col-sm-6 col-md-6 col-lg-6">
							<CustomizeInputField
								type="text"
								name="Last Name"
								placeholder="Enter your last name"
							/>
						</div>
						<div className="col-12">
							<CustomizeInputField
								type="email"
								name="Email"
								placeholder="Enter a valid email address"
							/>
						</div>
						<div className="col-sm-6 col-md-6 col-lg-6">
							<CustomizeInputField
								type="tel"
								name="Phone"
								placeholder="Enter your number (+234)"
							/>
						</div>
						<div className="col-sm-6 col-md-6 col-lg-6">
							<CustomizeInputField
								type="password"
								name="Password"
								placeholder="Enter a password"
							/>
						</div>
					</div>
					<div
						className="mt-3 d-flex"
						style={{ justifyContent: 'space-between', alignItems: 'center' }}
					>
						<p>
							I’m a member already?.
							<span onClick={() => navigate('/sign-up')}>Login</span>
						</p>

						<div className="my_btn">
							<CustomButton bg={'#EE7F00'}>Register</CustomButton>
						</div>
					</div>
				</form>
				<Chatbot />
			</Container>
		</ForeStartView>
	);
}

const Container = styled.div`
	width: 80%;
	text-align: center;
	color: #313545;
	.header {
		margin-top: 30px;
	}
	.header h1 {
		font-weight: 700;
		font-size: 34px;
	}
	p {
		font-weight: 400;
		font-size: 18px;
		margin: 0.2rem 0;
	}
	p span {
		color: #ee7f00;
		cursor: pointer;
	}
	form {
		text-align: left;
		margin: 1.5rem 0 6rem 0;
	}
	.my_btn {
		float: right;
	}
`;

export default SignUp;
