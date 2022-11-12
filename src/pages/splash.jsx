import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import CustomButton from "../components/CustomButton";
import ForeStartView from "../layouts/foreStartView";

import LOGO from "../assets/logo.svg";
import RIGHTARROW from "../assets/arrow_right.svg";

function SplashView() {
  const navigate = useNavigate();
  return (
    <div>
      <ForeStartView>
        <Container>
          <img src={LOGO} className={"logo"} alt="" />
          <div className="mt-4 mb-2">
            <h1>Speak freely with your doctor,</h1>
            <h2>your secrets are gone forever 👊</h2>
          </div>
          <p>
            Your physician and doctor are waiting for you on the inside. You can
            your level of anonymity. It’s your time to live healthy.
          </p>
          <CustomButton onClick={() => navigate("/sign-in")}>
            continue
          </CustomButton>
          <div className="next__btn" onClick={() => navigate("/sign-in")}>
            <img src={RIGHTARROW} alt="" />
          </div>
        </Container>
      </ForeStartView>
    </div>
  );
}

const Container = styled.div`
  color: #313545;
  img.logo {
    width: 150px;
    height: 100px;
  }
  h1 {
    font-weight: 800;
    font-size: 42px;
  }
  h2 {
    font-weight: 500;
    font-size: 42px;
  }
  p {
    margin-bottom: 50px;
    width: 80%;
  }
  .next__btn {
    position: relative;
    cursor: pointer;
  }
  .next__btn img {
    position: absolute;
    right: 50px;
    top: 50px;
  }
`;

export default SplashView;
