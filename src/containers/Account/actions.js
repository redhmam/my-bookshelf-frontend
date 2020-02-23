export const login = (data) => ({
    type: '@@USER/LOGIN',
    payload: {
        request:{
            method: 'post',
            url:`/login`,
            data
        }
    }
});

export const logout = () => ({
    type: '@@USER/LOGOUT',
    payload: null
});

export const signUp = (data) => ({
    type: '@@USER/SIGNUP',
    payload: {
        request:{
            method: 'post',
            url:`/signup`,
            data
        }
    }
});