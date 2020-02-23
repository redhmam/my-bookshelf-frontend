import React from 'react';
import { connect } from 'react-redux';

import * as bookActions from './actions';

import {
    Icon,
    Modal,
    Tooltip,
    Menu,
    Dropdown
} from 'antd';

import {
    Book as BookCard
} from '../../components/UI';

const { confirm } = Modal;

const Book = (props) => {
    const { 
        data, 
        changeBookList,
        setFavorite,
        activelist
    } = props;

    const showDeleteConfirm = (data) => {
        confirm({
          title: 'Are you sure delete this book?',
          content: data.title,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            props.deleteBook(data.id)
          }
        });
    }

    const menu = (
        <Menu onClick={(e) => changeBookList(data.id, e.key)}>
            {data.list !== '0' && (
            <Menu.Item key="0">
                Reading
            </Menu.Item>
            )}
            {data.list !== '1' && (
            <Menu.Item key="1">
                Want to read
            </Menu.Item>
            )}
            {data.list !== '2' && (
            <Menu.Item key="3">
                Read
            </Menu.Item>
            )}
        </Menu>
    );

    const actions = [];

    console.log(activelist);

    if(activelist !== 'favorites'){
        actions.push(
            <Dropdown overlay={menu} trigger={['click']}>
                <Tooltip title="Change list">
                    <Icon type="menu" key="list"/>
                </Tooltip>
            </Dropdown>
        );

        if(!data.is_favorite){
        
            actions.push(
                <Tooltip title="Set to favorite">
                    <Icon type="star" key="favorite" onClick={() => setFavorite(data.id, 1)}/>
                </Tooltip>
            );
        }else{
            actions.push(
                <Tooltip title="Remove favorite">
                    <Icon type="star" theme="filled" key="favorite" onClick={() => setFavorite(data.id, 0)}/>
                </Tooltip>
            );
        }

        actions.push(
            <Tooltip title="Delete">
                    <Icon type="delete" key="delete" onClick={() => showDeleteConfirm(data)}/>
            </Tooltip>
        );
    }else{
        actions.push(
            <Tooltip title="Remove favorite">
                <Icon type="star" theme="filled" key="favorite" onClick={() => setFavorite(data.id, 0)}/>
            </Tooltip>
        );
    }

    return (
        <BookCard 
            {...props}
            cover={<img alt={data.title} src={data.image} />}
            actions={actions}
    />);
}

const mapDispatchProps = dispatch => ({
    deleteBook: (id) => dispatch(bookActions.deleteBook(id)),
    changeBookList: (id, newlist) => dispatch(bookActions.changeBookList(id, newlist)),
    setFavorite: (id, param) => dispatch(bookActions.setFavorite(id, param))
});

export default connect(null, mapDispatchProps)(Book);