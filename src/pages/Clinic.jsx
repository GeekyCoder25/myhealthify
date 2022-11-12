import Layout from "../layouts/Layout";
import MainContent from "../layouts/MainContent/MainContent";
import Navbar from "../layouts/navbar/Navbar";
import Sidebar from "../layouts/sidebar/Sidebar";
import styled from "styled-components";
import ProfileCard from "../components/profile-card/ProfileCard";

import Filter from "../components/Filter";

const availableDoctors = [
  {
    name: "Dr. Abdurrahman Ali",
    role: "General Physician",
    hospital: "UITH",
    details: "View details",
    ratings: 4.5,
  },
  {
    name: "Dr. Kolawole Adewole",
    role: "General Physician",
    hospital: "UITH",
    details: "View details",
    ratings: 4.2,
  },
  {
    name: "Dr. Ali Ahmad",
    role: "General Physician",
    hospital: "UITH",
    details: "View details",
    ratings: 4.7,
  },
  {
    name: "Dr. Masturoh Ajoke",
    role: "General Physician",
    hospital: "UITH",
    details: "View details",
    ratings: 4.9,
  },
];

const Clinic = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Sidebar />
        <MainContent>
          <Wrapper>
            <div className="head">
              <h3>Welcome Back, Daniel</h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#8C92AB",
                  marginTop: "-5px",
                }}
              >
                Last Login at 2022-09-24 22:15:35
              </p>
            </div>

            <div className="doctors">
              <div>
                <h4 style={{ fontWeight: "bold" }}>Available doctors</h4>
              </div>

              <Filter />

              <div>
                <p style={{ color: "#8C92AB" }}>all 4 doctors for you</p>
              </div>
            </div>

            <div className="profileContainer">
              {availableDoctors.map((patient, index) => {
                const { name, role, details, hospital, ratings } = patient;
                return (
                  <ProfileCard
                    key={index}
                    name={name}
                    role={role}
                    hospital={hospital}
                    details={details}
                    ratings={ratings}
                  />
                );
              })}
            </div>
          </Wrapper>
        </MainContent>
      </Layout>
    </>
  );
};

const Wrapper = styled.div`
  .profileContainer {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .doctors {
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Clinic;
