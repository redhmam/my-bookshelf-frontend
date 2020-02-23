import React from 'react';
import { connect } from 'react-redux';

import * as bookActions from './actions';

import {
    Icon,
    Modal,
    Tooltip,
} from 'antd';

import {
    Book as BookCard
} from '../../components/UI';

const { confirm } = Modal;

const Book = (props) => {
    const { data } = props;

    const showDeleteConfirm = (data) => {
        confirm({
          title: 'Are you sure delete this book?',
          content: data.title,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            props.deleteBook(data.id)
          },
        //   onCancel() {
        //   },
        });
    }

    // const menu = (
    //     <Menu onClick={s}>
    //         <Menu.Item key="0">
    //             Reading
    //         </Menu.Item>
    //         <Menu.Item key="1">
    //             Want to read
    //         </Menu.Item>
    //         <Menu.Item key="3">
    //             Read
    //         </Menu.Item>
    //     </Menu>
    // );

    return (
        <BookCard 
            {...props}
            cover={<img alt={data.title} src={data.image} />}
            actions={[
            //     <Dropdown overlay={menu} trigger={['click']}>
            //         <Tooltip title="Change list">
            //             <Icon type="menu" key="list"/>
            //         </Tooltip>
            //     </Dropdown>,
                <Tooltip title="Set to favorite">
                    <Icon type="star" key="favorite"/>
                </Tooltip>,
                    <Tooltip title="Delete">
                        <Icon type="delete" key="delete" onClick={() => showDeleteConfirm(data)}/>
                </Tooltip>,
        ]}
    />);
}

const mapDispatchProps = dispatch => ({
    deleteBook: (id) => dispatch(bookActions.deleteBook(id)),
});

export default connect(null, mapDispatchProps)(Book);