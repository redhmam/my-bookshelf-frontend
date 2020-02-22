import React, { useEffect } from 'react';
import styled from 'styled-components';
import "antd/dist/antd.css";
import theme from '../UI/theme';
import Header from './Header';
import Footer from './Footer';

const LayoutStyle = styled.div`
  background-color: ${theme.mainColor};
`

export default function Layout(props) {
  const { children } = props;

  useEffect(() => {
    document.title = `${props.title} | MyBookShelf`;
  });

  return (
    <LayoutStyle>
      <Header/>
      {children}
      <Footer/>
    </LayoutStyle>
  )
}