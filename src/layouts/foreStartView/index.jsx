import React from 'react'
import styled from 'styled-components';
import BG from '../../assets/fore_background.svg';

function ForeStartView({children}) {
  return (
    <Wrapper>
      <div className="image__container">
        <img src={BG} alt="" />
      </div>
      <div className="content__container">{children}</div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
    display: flex;
    justify-content: space-between;
    height:100vh;
    align-items: center;
    width:100%;
    .image__container,.content__container{
        width:50%;
        margin:auto;
    }
    .image__container img{
        width:100%;
        height:100vh;
        object-position:center;
        object-fit:cover;
    }

`
export default ForeStartView
