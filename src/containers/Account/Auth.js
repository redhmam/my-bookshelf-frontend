import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { Skeleton } from 'antd';

import * as accountActions from './actions';
import * as bookActions from '../Books/actions';

const Auth = (props) => {

    const {
        loadUser,
        loadBooks
    } = props;

    if(localStorage.getItem('api_token') === null){
        props.history.push('/');
        return(<Skeleton loading={true}/>);
    }else if(!props.fetched){
        loadUser();
        loadBooks();
        return(<Skeleton loading={true}/>);
    }else{
        loadBooks();
    }
  
    return (<Route {...props}/>)
}

const mapStateToProps = state => ({
    loading: get(state, 'account.loading'),
    fetched: get(state, 'account.fetched')
})

const mapDispatchProps = dispatch => ({
    loadUser: () => dispatch(accountActions.loadUser()),
    loadBooks: () => dispatch(bookActions.loadAll()),
});
  
export default connect(mapStateToProps, mapDispatchProps)(withRouter(Auth));