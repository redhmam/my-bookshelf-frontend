import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col, Input } from 'antd';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import * as searchActions from '../../../containers/Search/actions';
import theme from '../../UI/theme';

const GOOGLE_API_KEY = 'AIzaSyCjLjUcPmkq5G13-QZ2Ro7ugoDJNbTOVnA';

const { Search } = Input;

const HeaderStyled = styled.header`
  min-height: 64px;
  padding: 0 15px;
  line-height: 64px;
  background-color: ${theme.mainColor};
  position: fixed;
  top: 0px;
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
    width: 50%;

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

const Header = (props) => {

    const handleLogout = () => {
      props.history.push('/');
    }

    const handleSearch = (val) => {
      props.history.push('/account/search');
      props.searchBook(val);
      axios.get(`https://www.googleapis.com/books/v1/volumes?%20+%20&q=${val}&key=${GOOGLE_API_KEY}`)
      .then(result => {
        props.setResultBooks(result.data);
      })
      .catch(error => {
        props.setResultBooks([]);
      })
    }

    return (
        <HeaderStyled>
          <Row>
            <Col xs={6} sm={4}>
              <div className="title"><Link to="/" title="MyBookShelf">MyBookShelf</Link></div>
            </Col>
            {props.logged ?
             <Col xs={18} sm={20}>
              <Row>
                <Col xs={0} sm={6}>
                  <Search
                      placeholder="Search a book"
                      onSearch={handleSearch}
                  />
                </Col>
                <Col xs={20} sm={18}>
                <nav>
                    <Link to="/account" title="Redhmam">Redhmam</Link>
                    <a href="#" onClick={handleLogout} title="Logout">Logout</a>
                </nav>
                </Col>
              </Row>
            </Col>
            :
            <nav>
                <Link to="/login" title="Login">Login</Link>
                <Link to="/signup" title="Sign Up">Sign Up</Link>
            </nav>
            }
          </Row>
          {props.logged && (
          <Row>
            <Col xs={24} sm={0} className="text-center">
              <Search
                  placeholder="Search a book"
                  onSearch={handleSearch}
              />
            </Col>
          </Row>
          )}
        </HeaderStyled>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchProps = dispatch => ({
  searchBook: (payload) => dispatch(searchActions.searchBook(payload)),
  setResultBooks: (payload) => dispatch(searchActions.setResultBooks(payload)),
});

export default  connect(null, mapDispatchProps)(withRouter(Header));