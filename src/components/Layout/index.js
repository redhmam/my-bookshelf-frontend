import React, { useEffect } from 'react';
import styled from 'styled-components';
import "antd/dist/antd.css";
import theme from '../UI/theme';
import Header from './Header';
import Footer from './Footer';
import bg from './bg.jpg';

const LayoutStyle = styled.div`
  background-color: ${theme.mainColor};
  min-height: calc(100vh - 51px);
  padding-top: 64px;
  position: relative;
  z-index: 1;

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
`

export default function Layout(props) {
  const { children } = props;

  useEffect(() => {
    document.title = `${props.title} | MyBookShelf`;
  });

  return (
    <div>
      <LayoutStyle>
        <Header/>
        {children}
      </LayoutStyle>
      <Footer/>
    </div>
  )
}