import React from 'react';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
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
    
    const menu = (
        <Menu>
            <Menu.Item key="0">
                Reading
            </Menu.Item>
            <Menu.Item key="1">
                Want to read
            </Menu.Item>
            <Menu.Item key="3">
                Read
            </Menu.Item>
        </Menu>
    );

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
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Tooltip title="Add to list">
                                <Icon type="plus" key="list"/>
                            </Tooltip>
                        </Dropdown>,
                        <Tooltip title="Set to favorite">
                            <Icon type="star" key="favorite"/>
                        </Tooltip>
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
});

export default  connect(mapStateToProps, mapDispatchProps)(Search);