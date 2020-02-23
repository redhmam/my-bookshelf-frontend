export const searchBook = (search) => ({
    type: '@@SEARCH/SEARCH',
    payload: {
        search
    }
});

export const setResultBooks = (results) => ({
    type: '@@SEARCH/SEARCH_SUCCESS',
    payload: {
        results
    }
});