import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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

  const activeList = get(props, 'match.params.list', 'favorites');

  const favorites = books.filter(book => book.is_favorite===1);
  const reading = books.filter(book => book.list==='0');
  const wantToRead = books.filter(book => book.list==='1');
  const read = books.filter(book => book.list==='2');

  const handleChangeTab = (route) => props.history.push(`/account/${route}`);

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
            <Tabs defaultActiveKey={activeList} onChange={handleChangeTab}>
              <TabPane tab={<span>Favorites <Badge count={favorites.length}/></span>} key="favorites">
                <List 
                  books={favorites}
                  activeList={activeList}
                />
              </TabPane>
              <TabPane tab={<span>Reading <Badge count={reading.length}/></span>}  key="reading">
                <List 
                  books={reading}
                  activeList={activeList}
                />
              </TabPane>
              <TabPane tab={<span>Want to read <Badge count={wantToRead.length}/></span>}  key="want-to-read">
                <List 
                  books={wantToRead}
                  activeList={activeList}
                />
              </TabPane>
              <TabPane tab={<span>Read <Badge count={read.length}/></span>}  key="read">
                <List 
                  books={read}
                  activeList={activeList}
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

export default connect(mapStateToProps)(withRouter(Account));