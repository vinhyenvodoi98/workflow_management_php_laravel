import * as login from '../actions/loginAction';

const initialState = {
  isLogin: false,
  name: '',
  position: '',
  token: '',
  isLoading: true,
  users: null,
  currentUserGroup: null,
  navPositon: true,
  backGround: true
  // NOTE
  // some thing you want to set global
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
        name: action.name,
        position: action.position,
        token: action.token
      };
    case login.ISLOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case login.LOADALLUSER:
      return {
        ...state,
        users: action.users,
        currentUserGroup: action.currentUserGroup
      };
    case login.LOADUSERGROUP:
      return {
        ...state,
        currentUserGroup: action.currentUserGroup
      };
    case login.UPDATENAVPOSITION:
      return {
        ...state,
        navPositon: action.navPositon
      };
    case login.UPDATEBACKGROUND:
      return {
        ...state,
        backGround: action.backGround
      };

    // NOTE
    // write case to update initialState
    default:
      return state;
  }
};

export default loginReducer;
