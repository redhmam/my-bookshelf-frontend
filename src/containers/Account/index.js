import React from 'react';
import Layout from '../../components/Layout';
import List from '../../components/Resume';

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

  const favorites = [
    {
      title: 'Book title',
      autor: 'Book autor',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg',
      isFavorite: true,
      list: 'reading'
    }
  ];

  const reading = [
    {
      title: 'Book title',
      autor: 'Book autor',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg',
      isFavorite: true,
      list: 'reading'
    }
  ];

  const wantToRead = [
    {
      title: 'Book title',
      autor: 'Book autor',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg',
      isFavorite: true,
      list: 'reading'
    }
  ];
  

  const read = [
    {
      title: 'Book title',
      autor: 'Book autor',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg',
      isFavorite: true,
      list: 'reading'
    }
  ];

  const handleTabChange = () => {

  }

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
            <Tabs defaultActiveKey="1" onChange={handleTabChange}>
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

export default Account;