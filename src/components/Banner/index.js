import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../UI/theme';
import bg from './bg.jpg';

const Banner = styled.div`
  height: 100vh;
  width:100%;
  padding: 250px 0px 0px 20px;
  position: relative;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    padding: 250px 0px 0px 200px;
  }

  :before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${bg}) no-repeat;
    background-size: cover;
    opacity: 0.8;
  }

  h1, h2{
    color: #fff;
  }

  h1{
    font-size: 35px;
    margin-bottom: 10px;
  }
  h2{
    font-size: 24px;
    margin-bottom: 30px;
  }

  a{
    background-color: ${theme.mainColor};
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    color: #212121;
    font-size: 20px;

    :hover{
      color: #fff;
    }
  }
`

export default function banner() {
    return (
        <Banner>
            <div>
            <h1>Manage all your books.</h1>
            <h2>You can organize by favorite, read or want to read</h2>
            <Link to="/signup" title="Get Start">Get Start</Link>
            </div>
        </Banner>
    )
}