import axios from 'axios';
import store from '../store';

export const LOGIN = 'LOGIN';
export const ISLOADING = 'ISLOADING';
export const LOADALLUSER = 'LOADALLUSER';
export const LOADUSERGROUP = 'LOADUSERGROUP';

export const login = token => async dispatch => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  await axios
    .get('http://localhost:8181/api/auth')
    .then(response => {
      // handle success
      dispatch({
        type: LOGIN,
        isLogin: true,
        name: response.data.name,
        position: response.data.position,
        token
      });
      dispatch({
        type: ISLOADING,
        isLoading: false
      });
    })
    .catch(error => {
      // handle error
      localStorage.removeItem('token');
      dispatch({
        type: ISLOADING,
        isLoading: false
      });
    });

  dispatch(loadAllUser());
  dispatch(loadUserGroup());

  //  isLogin will save in store and can be called from any view
};

export const logout = () => async dispatch => {
  var token = localStorage.getItem('token');
  axios
    .post('http://localhost:8181/api/logout', {
      token: token
    })
    .then(response => {
      localStorage.removeItem('token');
      dispatch({
        type: LOGIN,
        isLogin: false,
        name: '',
        token: ''
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const isloading = () => async dispatch => {
  dispatch({
    type: ISLOADING,
    isLoading: false
  });
};

export const loadAllUser = () => dispatch => {
  var token = store.getState().LoginStatus.token;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  axios.get('http://localhost:8181/api/all_user').then(response => {
    // handle success
    dispatch({
      type: LOADALLUSER,
      users: response.data.work
    });
  });
};

export const loadUserGroup = () => dispatch => {
  var token = store.getState().LoginStatus.token;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  axios.get('http://localhost:8181/api/users/currentUser/groups').then(response => {
    // handle success

    dispatch({
      type: LOADUSERGROUP,
      currentUserGroup: response.data
    });
  });
};
