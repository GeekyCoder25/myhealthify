import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "./UI/Card";

const Thanks = () => {
  const navigate = useNavigate();
  const handleContinue = (e) => {
    navigate("/history");
  };

  return (
    <Wrapper>
      <Card style={{ width: "40rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <p>
            Thank you doctor. We appreciate <br />
            your service to humanity.
          </p>
          <div style={{ fontSize: "10rem" }}>👍</div>
          <p>Stay strong always, we heart you💖</p>
          <div className="btn-container">
            <input
              type="button"
              value="Continue"
              className="btn"
              onClick={handleContinue}
            />
          </div>
        </div>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 15%;

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      background: #0e9f6b;
      border-radius: 10px;
      color: #fff;
      padding: 0.5rem 2.4rem;
      margin-top: 1rem;
    }
  }
`;

export default Thanks;
