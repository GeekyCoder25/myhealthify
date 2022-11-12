import styled from "styled-components";
import filter from "../assets/Filter.svg";

const Filter = () => {
  return (
    <Wrapper>
      <img src={filter} alt="" />
      <div>
        <select value="" onChange="">
          <option value="Far Distance">Far Distance</option>
          <option value="Far Distance">Far Distance</option>
          <option value="Far Distance">Far Distance</option>
          <option value="Far Distance">Far Distance</option>
        </select>
      </div>

      <div>
        <select value="" onChange="">
          <option value="Speciality">Speciality</option>
          <option value="Speciality">Speciality</option>
          <option value="Speciality">Speciality</option>
          <option value="Speciality">Speciality</option>
        </select>
      </div>

      <div>
        <select value="" onChange="">
          <option value="Gender">Gender</option>
          <option value="Gender">Gender</option>
          <option value="Gender">Gender</option>
          <option value="Gender">Gender</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  select {
    outline: none;
    border: none;
    background: #ffffff;
    box-shadow: 0px 0px 0px 1px #cdd1dc;
    border-radius: 6px;
    color: #d9ddea;
    padding: 5px 8px;
    cursor: pointer;
  }
`;

export default Filter;
