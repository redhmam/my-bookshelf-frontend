import update from 'immutability-helper';
import get from 'lodash/get';
// import set from 'lodash/set';

const ACTION_HANDLERS = {

    ['@@SEARCH/SEARCH']: (state, action) => {
        return update(state, {
            search: { $set: get(action, 'payload.search') },
            loading: { $set: true }
        })
    },

    ['@@SEARCH/SEARCH_SUCCESS']: (state, action) => {
        return update(state, {
            results: { $set: get(action, 'payload.results') },
            loading: { $set: false },
            fetched: { $set: true }
        })
    },

}

const defaultState = {
    search: null,
    results: [],
    loading: false,
    fetched: false
};

const reducer = (state = defaultState, action) => {
    const handler = ACTION_HANDLERS[action.type];
  
    return handler ? handler(state, action) : state;
};

export default reducer;