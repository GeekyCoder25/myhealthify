import styled from "styled-components";
import Card from "../components/UI/Card";
import yesGreen from "../assets/yesgreen.png";
import CustomButton from "../components/CustomButton";

const BasicPlan = () => {
  return (
    <Card
      style={{
        marginTop: "2rem",
        width: "25rem",
      }}
    >
      <Wrapper>
        <h5 className="basic">Basic Plan</h5>

        <p className="info">
          It provides cash support to the one individual insured against all
          cases of minor disease diagnosis that may occur in the future.
        </p>

        <div className="enjoy">
          <div className="en-container">
            <img src={yesGreen} alt="" /> <span>4hrs weekly session</span>
          </div>
          <div className="en-container">
            <img src={yesGreen} alt="" />
            <span>N10,000 Monthly Coverage Amount</span>
          </div>
          <div className="en-container">
            <img src={yesGreen} alt="" />
            <span style={{ textDecoration: "line-through" }}>
              %25 cash back
            </span>
          </div>
        </div>

        <div>
          <h5 className="price">
            N6,150 <span>/monthly basic paln</span>
          </h5>
        </div>

        <div className="upgrade-text">
          You can upgrade whenever you want to pay and continue enjoying our
          healthy plans for your healthy living.
        </div>

        <div className="btn-container">
          <CustomButton children="Select This Plan" bg="#313545" />
        </div>
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.section`
  color: #0e9f6b;
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
    background-color: #0e9f6b;
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

export default BasicPlan;
