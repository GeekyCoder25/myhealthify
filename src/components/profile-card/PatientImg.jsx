import styled from "styled-components";
import set from "../../assets/sec2.png";

const PatientImg = () => {
  return (
    <div>
      <Wrapper>
        <div className="pointer"></div>
        <div className="pic">
          <div className="setContainer">
            <img src={set} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  border: solid 1px #f0f2f6;
  padding: 0.5rem;
  border-radius: 50%;
  position: relative;

  .pointer {
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: #0e9f6b;
    left: 5.3rem;
    top: 0;
  }

  .pic {
    width: 105.04px;
    height: 105.04px;
    border-radius: 50%;
    background-color: #8eeab3;
    position: relative;

    .setContainer {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default PatientImg;
