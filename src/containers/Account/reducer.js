import update from 'immutability-helper';
import get from 'lodash/get';

const ACTION_HANDLERS = {

    ['@@USER/LOGIN']: (state) => {
        return update(state, {
            loading: { $set: true }
        })
    },

    ['@@USER/LOGIN_SUCCESS']: (state, action) => {
        return update(state, {
            user: { $set: get(action, 'payload.data.user') },
            loading: { $set: false },
            fetched: { $set: true }
        })
    },

    ['@@USER/LOGOUT']: (state) => {
        return update(state, {
            loading: { $set: false },
            fetched: { $set: false },
            user: { $set: null }
        })
    },

    ['@@USER/SIGNUP']: (state) => {
        return update(state, {
            loading: { $set: true }
        })
    },

    ['@@USER/SIGNUP_SUCCESS']: (state, action) => {
        return update(state, {
            user: { $set: get(action, 'payload.data.user') },
            loading: { $set: false },
            fetched: { $set: true }
        })
    },

}

const defaultState = {
    user: null,
    loading: false,
    fetched: false
};

const reducer = (state = defaultState, action) => {
    const handler = ACTION_HANDLERS[action.type];
  
    return handler ? handler(state, action) : state;
};

export default reducer;