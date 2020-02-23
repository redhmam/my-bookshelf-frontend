import React from 'react';

import {
    Row,
    Col,
    Icon,
    Modal,
    Tooltip,
    Dropdown,
    Menu
  } from 'antd';

import {
    Book
} from '../UI';
  
const { confirm } = Modal;

export default function resume(props) {

    const { 
        books,
    } = props;

    const showDeleteConfirm = (book) => {
        confirm({
          title: 'Are you sure delete this book?',
          content: book.title,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
    }

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
        <Row className="p-20">
            {books.map((book, index) => 
            <Col xs={12} sm={8} md={6} lg={4} xl={3} key={index}>
                <Book
                    cover={<img alt={book.title} src={book.image} />}
                    bodyStyle={{display: `none`}}
                    actions={[
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Tooltip title="Change list">
                                <Icon type="menu" key="list"/>
                            </Tooltip>
                        </Dropdown>,
                        <Tooltip title="Set to favorite">
                            <Icon type="star" key="favorite"/>
                        </Tooltip>,
                            <Tooltip title="Delete">
                                <Icon type="delete" key="delete" onClick={() => showDeleteConfirm(book)}/>
                        </Tooltip>,
                    ]}
                >
                </Book>
            </Col>
            )}
        </Row>
    )
}
