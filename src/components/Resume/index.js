import React from 'react';

import {
    Row,
    Col,
    Result,
    Icon
} from 'antd';

import Book from '../../containers/Books/Book';

export default function resume(props) {

    const { 
        name,
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
            {books.length === 0 && (
                <Result
                    icon={<Icon type="search" />}
                    title={`You have no books in ${name}`}
                />
            )}
        </Row>
    )
}
