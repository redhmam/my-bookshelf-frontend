export const create = (data) => ({
    type: '@@BOOKS/CREATE',
    payload: {
        request:{
            method: 'post',
            url:`/books`,
            data
        }
    }
});

export const loadAll = () => ({
    type: '@@BOOKS/ALL',
    payload: {
        request:{
            method: 'get',
            url:`/books`,
        }
    }
});

export const deleteBook = (id) => ({
    type: '@@BOOKS/DELETE',
    payload: {
        request:{
            method: 'delete',
            url:`/books/${id}`,
        },
        id
    }
});

export const changeBookList = (id, list) => ({
    type: '@@BOOKS/UPDATE',
    payload: {
        request:{
            method: 'put',
            url:`/books/${id}/list`,
            data: {
                list
            }
        }
    }
})

export const setFavorite = (id, favorite) => ({
    type: '@@BOOKS/FAVORITE',
    payload: {
        request:{
            method: 'put',
            url:`/books/${id}/favorite`,
            data: {
                favorite
            }
        }
    }
})