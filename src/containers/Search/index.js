import React from 'react';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import get from 'lodash/get';

import {
  Card,
  Row,
  Col,
  PageHeader,
  Dropdown,
  Menu,
  Tooltip,
  Icon,
  Skeleton,
  Result
} from 'antd';

import {
    Book,
} from '../../components/UI';

import * as bookActions from '../../containers/Books/actions';

const Search = (props) => {

    const { 
        loading,
        fetched,
        results 
    } = props;

    const books = get(results, 'items', []);

    const getBookId = (book) => get(book, 'id');
    const getBookTitle = (book) => get(book, 'volumeInfo.title');
    const getBookImage = (book) => get(book, 'volumeInfo.imageLinks.smallThumbnail');

    const getListPath = (list) => {
      switch(list){
        case '0': return 'reading';
        case '1': return 'want-to-read';
        case '2': return 'read';
        default: console.log(`List ${list} is not defined`);
      }
    }

    const createBookByList = (book, list) => {
      props.createBook({
        bid: getBookId(book),
        title: getBookTitle(book),
        image: getBookImage(book),
        is_favorite: 0,
        list
      });
      props.history.push(`/account/${getListPath(list)}`);
    }
    
  return (
    <Layout title="Seach books" logged>
      <Row className="p-20">
        <Col xs={24} sm={{span: 20, offset: 2}}>
          <Card>
            <PageHeader
              style={{padding: `15px 0px`}}
              title="Search Books"
              subTitle="Search new books to set favorite, reading, want to read or read"
            />
           <Row className="p-20" gutter={[16, 16]}>
            {books.map((book, index) => 
            <Col xs={12} sm={8} md={6} lg={4} key={getBookId(book)}>
                <Book
                    cover={<img alt={getBookTitle(book)} src={getBookImage(book)} />}
                    actions={[
                        <Dropdown overlay={
                          <Menu onClick={(e) => createBookByList(book, e.key)}>
                            <Menu.Item key="0">
                                Reading
                            </Menu.Item>
                            <Menu.Item key="1">
                                Want to read
                            </Menu.Item>
                            <Menu.Item key="2">
                                Read
                            </Menu.Item>
                        </Menu>
                      } trigger={['click']}>
                            <Tooltip title="Add to list">
                                <Icon type="plus" key="list"/>
                            </Tooltip>
                        </Dropdown>
                    ]}
                >
                </Book>
            </Col>
            )}
            {loading && (<Skeleton loading={true}/>)}
            {fetched && books.length === 0 && (
            <Result
                icon={<Icon type="search" />}
                title="No books found the search term"
            />
            )}
            </Row>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

const mapStateToProps = state => ({
    search: get(state, 'search.search'),
    loading: get(state, 'search.loading'),
    fetched: get(state, 'search.fetched'),
    results: get(state, 'search.results')
})

const mapDispatchProps = dispatch => ({
  createBook: (payload) => dispatch(bookActions.create(payload)),
});

export default  connect(mapStateToProps, mapDispatchProps)(withRouter(Search));