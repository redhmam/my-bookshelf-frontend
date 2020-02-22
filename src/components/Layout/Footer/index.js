import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  padding: 15px;
  text-align: center;
  background-color: #454545;
  color: #ccc;

  a{
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
`

export default function footer() {
    return (
        <Footer>
            <span>MyBookShelf ©2020. Developed by <a href="https://www.linkedin.com/in/redhmam" title="Redhmam">Redhmam</a></span>
        </Footer>
    )
}
