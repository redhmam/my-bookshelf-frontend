import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../UI/theme';

const Banner = styled.div`
  height: 100vh;
  width:100%;
  padding: 150px 0px 0px 20px;

  @media only screen and (min-width: 768px) {
    padding: 250px 0px 0px 200px;
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
            <h2>You can organize by favorite, reading, want to read or read</h2>
            <Link to="/signup" title="Get Start">Get Start</Link>
            </div>
        </Banner>
    )
}