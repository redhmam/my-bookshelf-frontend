import React from 'react';
import styled from 'styled-components';
import theme from '../../UI/theme';

const Header = styled.header`
  height: 64px;
  padding: 0 15px;
  line-height: 64px;
  background-color: ${theme.mainColor};
  position: fixed;
  width: 100%;
  z-index: 999;

  @media only screen and (min-width: 768px) {
    padding: 0 50px;
  }

  .title {
    float: left;
    font-size: 22px;
    font-weight: 900;
    
    a{
      color: #fff;
      text-decoration: none;
    }
  }

  nav {
    float: right;
    text-align: right;

    a{
      color: #212121;
      padding: 10px;
      text-decoration: none;
      font-weight: 600;
    }

    a:last-child{
      border: solid 2px #212121;
      border-radius: 5px;
      color: #212121;

      :hover{
        background-color: #212121;
        color: #ccc;
      }
    }
  }
`

export default function header() {
    return (
        <Header>
            <div className="title"><a href="/" title="MyBookShelf">MyBookShelf</a></div>
            <nav>
                <a href="/login" title="Login">Login</a>
                <a href="/signup" title="Sign Up">Sign Up</a>
            </nav>
        </Header>
    )
}
