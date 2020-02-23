import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import List from '../../components/Resume';
import get from 'lodash/get';

import {
  Card,
  Row,
  Col,
  Tabs,
  PageHeader
} from 'antd';

import {
  Badge
} from '../../components/UI';

const { TabPane } = Tabs;

const Account = (props) => {

  const { books } = props;

  const favorites = books.filter(book => book.is_favorite===1);
  const reading = books.filter(book => book.list===0);
  const wantToRead = books.filter(book => book.list===1);
  const read = books.filter(book => book.list===2);

  return (
    <Layout title="Account" logged>
      <Row className="p-20">
        <Col xs={24} sm={{span: 20, offset: 2}}>
          <Card>
            <PageHeader
              style={{padding: `15px 0px`}}
              title="My Books"
              subTitle="You can organize by favorite, reading, want to read or read"
            />
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span>Favorites <Badge count={favorites.length}/></span>} key="1">
                <List 
                  name="Favorites"
                  books={favorites}
                />
              </TabPane>
              <TabPane tab={<span>Reading <Badge count={reading.length}/></span>}  key="2">
                <List 
                  name="Reading"
                  books={reading}
                />
              </TabPane>
              <TabPane tab={<span>Want to read <Badge count={wantToRead.length}/></span>}  key="3">
                <List 
                  name="Want to read"
                  books={wantToRead}
                />
              </TabPane>
              <TabPane tab={<span>Read <Badge count={read.length}/></span>}  key="4">
                <List 
                  name="Read"
                  books={read}
                />
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

const mapStateToProps = state => ({
  books: get(state, 'books.books', []),
  fetched: get(state, 'books.fetched'),
  loading: get(state, 'books.loading'),
})

export default connect(mapStateToProps)(Account);