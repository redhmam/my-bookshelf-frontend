import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import get from 'lodash/get';

import * as accountActions from './actions';
import * as bookActions from '../Books/actions';

const Auth = (props) => {

    const {
        loadBooks
    } = props;

    if(localStorage.getItem('api_token') === null){
        props.history.push('/');
    }else if(!props.fetched){
        props.history.push('/');
    }

    loadBooks();
    
    // else{
    //   props.loadUser();
    //   return(<div>loading...</div>);
    // }

    // if(props.loading){
    //     return(<div>loading...</div>);
    // }
  
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