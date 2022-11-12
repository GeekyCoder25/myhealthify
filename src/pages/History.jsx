import styled from "styled-components";
import ProfileCard from "../components/profile-card/ProfileCard";
import Layout from "../layouts/Layout";
import Navbar from "../layouts/navbar/Navbar";
import Sidebar from "../layouts/sidebar/Sidebar";
import MainContent from "../layouts/MainContent/MainContent";

import timeImg from "../assets/time.svg";
import search from "../assets/search.svg";
import { Outlet } from "react-router-dom";

const History = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Sidebar />
        <MainContent>
          <Wrapper>
            <div className="session">
              <h3>Your session history ⏱️</h3>

              <div className="icon-input">
                <img src={search} alt="search-icon" />
                <input
                  type="text"
                  placeholder="Search by patient, date, keyword."
                />
              </div>
            </div>

            <>
              <p className="date">Yesterday</p>
              <div className="profileContainer">
                <ProfileCard
                  key="1"
                  name="Dr. Abdurrahman Ali"
                  role="General Physician"
                  hospital="UITH"
                  time="5 hours"
                  timeImg={timeImg}
                />
              </div>
            </>

            <>
              <p className="date">05/09/2022</p>
              <div className="profileContainer">
                <ProfileCard
                  key="1"
                  name="Dr. Abdurrahman Ali"
                  role="General Physician"
                  hospital="UITH"
                  time="3 hours"
                  timeImg={timeImg}
                />
              </div>
            </>

            <>
              <p className="date">27/08/2022</p>
              <div className="profileContainer">
                <ProfileCard
                  key="1"
                  name="Dr. Abdurrahman Ali"
                  role="General Physician"
                  hospital="UITH"
                  time="2 hours"
                  timeImg={timeImg}
                />
              </div>
            </>
          </Wrapper>
          <Outlet />
        </MainContent>
      </Layout>
    </>
  );
};

const Wrapper = styled.div`
  .session {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon-input {
      display: flex;
      align-items: center;
      position: relative;
    }

    img {
      position: absolute;
      margin-left: 1rem;
    }

    input {
      min-width: 25rem;
      padding: 0.6rem;
      padding-left: 2.8rem;
      outline: none;
      border: none;
      box-shadow: 0px 0px 0px 1px #cdd1dc;
      border-radius: 6px;

      ::placeholder {
        color: #d9ddea;
      }
    }
  }

  .date {
    margin-top: 2rem;
    color: #8c92ab;
  }

  .profileContainer {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`;

export default History;
