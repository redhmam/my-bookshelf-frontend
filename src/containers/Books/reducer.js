import update from 'immutability-helper';
import get from 'lodash/get';

const ACTION_HANDLERS = {

    ['@@BOOKS/CREATE_SUCCESS']: (state, action) => {
        return update(state, {
            books: { $push: get(action, 'payload.data.user') },
            loading: { $set: false },
            fetched: { $set: true }
        })
    },

}

const defaultState = {
    books: null,
    loading: false,
    fetched: false
};

const reducer = (state = defaultState, action) => {
    const handler = ACTION_HANDLERS[action.type];
  
    return handler ? handler(state, action) : state;
};

export default reducer;