import axios from "axios";

export const USER_LOGIN = "USER_LOGIN";


function getUserDataFromResponse(responseData){
  if(responseData.success === true){
    return {
      authenticated: responseData.userData.authenticated,
      errorMsg: false,
      status: false
    };
  }
  return {
    authenticated: false,
    errorMsg: responseData.errorMsg,
    status: false
  };
}

function updateUserData(userData){
  return {
    type: USER_LOGIN,
    userData
  }
}

export function login(username, password){

  return function (dispatch) {
    let payload = {username, password};
    axios.post("/api/client/v1/login", payload)
      .then((response)=>{

        if(response.statusText === "OK"){
          dispatch(updateUserData(getUserDataFromResponse(response.data)))
        }
      })
      .catch((err)=>{
        //todo: handle errors, need to propagate to store too
      });
  };
}