import React from 'react';

import {
    Row,
    Col,
} from 'antd';

import Book from '../../containers/Books/Book';

export default function resume(props) {

    const { 
        books,
        activeList
    } = props;
    
    return (
        <Row className="p-20" gutter={[16, 16]}>
            {books.map((book, index) => 
            <Col xs={12} sm={8} md={6} lg={4} xl={3} key={index}>
                <Book data={book} activeList={activeList}/>
            </Col>
            )}
        </Row>
    )
}
