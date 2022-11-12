import { useState } from "react";
import styled from "styled-components";
import robot from "../assets/robot.png";
import sound from "../assets/sound.png";
import Card from "../components/UI/Card";

const AIBot = () => {
  const [hideBot, setHideBot] = useState({});
  const [text, setText] = useState(
    <p>
      Hi! Daniel, Welcome to SecretDee. I’m your AI Doctor, Your health is my
      primary concern. Please verify your email to see human doctors. You can
      also speak with me for <span>FREE</span>
    </p>
  );

  const hideHandler = (e) => {
    const card = e.target.parentElement.parentElement.parentElement;
    card.style.display = "none";

    setHideBot({
      position: "fixed",
      bottom: "0",
      right: "0",
    });
  };

  setTimeout(() => {
    setText(
      <span className="second-slide">
        <p>
          You’ve taken a great step towards living a healthy life. I’m your FREE
          AI Doctor. Touch me to start a chat or select an option below.
        </p>
        <span>
          <button>Free chat with me</button>
          <button>Free session with me</button>
        </span>
      </span>
    );
  }, 5000);

  return (
    <Wrapper style={hideBot}>
      <div className="mute-card">
        <div className="card-cont">
          <Card>{text}</Card>
        </div>
        <div className="mute-cont">
          <div className="mute" onClick={hideHandler}>
            <img src={sound} alt="sound" />
            <p>Click to mute.</p>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={robot} alt="robot" />
      </div>
    </Wrapper>
  );
};

export default AIBot;

const Wrapper = styled.aside`
  margin: 1rem 0;

  .mute-card {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: -4rem;
  }

  .card-cont {
    div {
      max-width: 370px;
      margin-right: 7rem;

      p {
        span {
          color: #0e9f6b;
        }
      }
    }
  }

  .mute-cont {
    width: 47%;
    margin-top: 0.5rem;
  }

  .mute {
    display: flex;
    gap: 0.5rem;
    margin-top: 5px;
    cursor: pointer;
    width: 32%;

    p {
      color: #8c92ab;
    }
  }

  .img-container {
    display: flex;
    justify-content: end;

    img {
      width: 5rem;
      margin-right: 2rem;
      margin-top: 1rem;
    }
  }

  .second-slide {
    span {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;

      button {
        background: #03053d;
        border-radius: 100px;
        outline: none;
        border: none;
        color: #fff;
        padding: 8px;
      }
    }
  }
`;
