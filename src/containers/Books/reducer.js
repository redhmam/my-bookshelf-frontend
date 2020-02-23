import update from 'immutability-helper';
import get from 'lodash/get';

const ACTION_HANDLERS = {

    ['@@BOOKS/ALL_SUCCESS']: (state, action) => {
        return update(state, {
            books: { $set: get(action, 'payload.data.books') },
            loading: { $set: false },
            fetched: { $set: true }
        })
    },

    ['@@BOOKS/CREATE_SUCCESS']: (state, action) => {
        return update(state, {
            books: (oldBooks) => [get(action, 'payload.data.book'), oldBooks],
            loading: { $set: false },
            fetched: { $set: true }
        })
    },

    ['@@BOOKS/DELETE_SUCCESS']: (state, action) => {
        return update(state, {
            books: (oldBooks) => oldBooks.filter(b => b.id !== get(action, 'meta.previousAction.payload.id'))
        })
    },

}

const defaultState = {
    books: [],
    loading: false,
    fetched: false
};

const reducer = (state = defaultState, action) => {
    const handler = ACTION_HANDLERS[action.type];
  
    return handler ? handler(state, action) : state;
};

export default reducer;