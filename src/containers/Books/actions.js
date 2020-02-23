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