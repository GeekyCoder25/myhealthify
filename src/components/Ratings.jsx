import star from "../assets/Star.png";

const Ratings = ({ ratings, className }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        gap: "0.5rem",
      }}
    >
      <img src={star} alt="" />
      <p>
        {ratings} <span style={{ color: "#8C92AB" }}>(1k+ ratings)</span>
      </p>
    </div>
  );
};

export default Ratings;
