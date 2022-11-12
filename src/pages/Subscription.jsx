import BasicPlan from "../components/BasicPlan";
import MyHealthify from "../components/MyHealthify";
import Layout from "../layouts/Layout";
import MainContent from "../layouts/MainContent/MainContent";
import Navbar from "../layouts/navbar/Navbar";
import Sidebar from "../layouts/sidebar/Sidebar";

const Subscription = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Sidebar />
        <MainContent>
          <h3>Select Your Plan 💰</h3>
          <p style={{ color: "#8C92AB" }}>
            Please select from the affordable plans below
          </p>
          <div
            className="row"
            style={{
              alignItems: " center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <div className="col-sm-12 col-lg-6">
              <BasicPlan />
            </div>
            <div className="col-sm-12 col-lg-6">
              <MyHealthify />
            </div>
          </div>
        </MainContent>
      </Layout>
    </>
  );
};

export default Subscription;
