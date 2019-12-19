import axios from 'axios';
import store from '../store';

export const LOGIN = 'LOGIN';
export const ISLOADING = 'ISLOADING';
export const LOADALLUSER = 'LOADALLUSER';
export const LOADUSERGROUP = 'LOADUSERGROUP';
export const UPDATENAVPOSITION = 'UPDATENAVPOSITION';
export const UPDATEBACKGROUND = 'UPDATEBACKGROUND';

export const login = token => async dispatch => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  var navPositon, backGround;

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

  if ((navPositon = localStorage.getItem('navPositon'))) {
    navPositon = navPositon === 'true';
    dispatch(UpdateNavPosition(navPositon));
  }
  if ((backGround = localStorage.getItem('backGround'))) {
    backGround = backGround === 'true';
    dispatch(UpdateBackgroud(backGround));
  }

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

export const UpdateNavPosition = navPositon => dispatch => {
  localStorage.setItem('navPositon', navPositon);
  dispatch({
    type: UPDATENAVPOSITION,
    navPositon
  });
};

export const UpdateBackgroud = backGround => dispatch => {
  localStorage.setItem('backGround', backGround);
  if (backGround) {
    document.body.style.background = 'linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)';
    document.body.style.height = '100%';
  } else {
    document.body.style.background = 'linear-gradient(90deg, #141e30 0%,#243b55 100% )';
    document.body.style.height = '100%';
  }
  dispatch({
    type: UPDATEBACKGROUND,
    backGround
  });
};
