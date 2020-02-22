import React from 'react';
import styled from 'styled-components';
import "antd/dist/antd.css";
import theme from '../UI/theme';
import Header from './Header';
import Footer from './Footer';

const Layout = styled.div`
  background-color: ${theme.mainColor};
`

export default function layout(props) {
  const { children } = props;
  return (
    <Layout>
      <Header/>
      {children}
      <Footer/>
    </Layout>
  )
}