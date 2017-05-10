import {USER_LOGIN} from "./user.actions"
import {getCookie} from "../utils/cookieParser";
// not good way to do this, shouldn't mix "user" with ui stuff maybe
const defaultUser = {
  authenticated: false,
  errorMsg: false,
  status: false
};

// very hacky, this does not quarantee valid session at all
if(getCookie("auth_token")){
  defaultUser.authenticated = true;
}

export default (state = defaultUser, action) => {
  //this is here just because I'm lazy, prevents a wonky behaviour from redux-socket.io
  //this should not be needed, should be fixed
  //todo: fix this
  if(!action){
    return state;
  }
  switch(action.type) {
    case USER_LOGIN:
      return Object.assign({}, defaultUser, action.userData);
      break;
    default:
      return state
  }
};
