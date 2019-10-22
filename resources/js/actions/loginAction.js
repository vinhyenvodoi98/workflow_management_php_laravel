import axios from 'axios';

export const LOGIN = 'LOGIN';
export const login = (token) => async (dispatch) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    axios
        .get('http://localhost:8181/api/auth')
        .then((response) => {
            // handle success
            dispatch({
                type: LOGIN,
                isLogin: true,
                name: response.data.name
            });
        })
        .catch((error) => {
            // handle error
            console.log(error);
        });

    //  isLogin will save in store and can be called from any view
};
