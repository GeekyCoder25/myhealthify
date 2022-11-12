import React from "react";
import styled from "styled-components";

import CustomizeInputField from "../../components/form_field_sets/CustomizeInputField";
import ForeStartView from "../../layouts/foreStartView";

import LOGO from "../../assets/logo.svg";
import CustomButton from "../../components/CustomButton";
import Chatbot from "../../components/chatbot";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <ForeStartView>
      <Container>
        <img src={LOGO} alt="" className="logo" />
        <div className="header">
          <h1>Welcome Back Fam 🤝</h1>
          <p>We hope you have been better. All we care about is your health.</p>
        </div>
        <form action="" onSubmit={() => navigate("/clinic")}>
          <CustomizeInputField
            type="text"
            name="Email"
            placeholder="Enter your registered email address"
          />
          <CustomizeInputField
            type="password"
            name="Password"
            placeholder="Enter your registered email address"
          />
          <div className="d-flex align-items-center justify-content-between mt-5">
            <p>
              I’m not registered yet?.{" "}
              <span onClick={() => navigate("/sign-up")}>Register</span>
            </p>
            <CustomButton>Continue</CustomButton>
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
    color: #0e9f6b;
    cursor: pointer;
  }
  form {
    text-align: left;
    margin: 1.5rem 0 0.5rem 0;
  }
`;

export default SignIn;
