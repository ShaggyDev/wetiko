const defaultUser = {
  authenticated: false
};

export default (state = defaultUser, action) => {
  //this is here just because I'm lazy, prevents a wonky behaviour from redux-socket.io
  //this should not be needed, should be fixed
  //todo: fix this
  if(!action){
    return state;
  }
  switch(action.type) {
    default:
      return state
  }
};
