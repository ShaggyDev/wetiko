const defaultState = {clusters: [
  {name: "adas", connected: true, workers: 4, createdAt: "3days ago", nodeCount: 3, dbCount: 5, primed: true},
  {name: "atsfdgdsfg", connected: true, workers: 4, createdAt: "3days ago", nodeCount: 3, dbCount: 5, primed: true},
  {name: "grsdfbvc", connected: true, workers: 4, createdAt: "3days ago", nodeCount: 3, dbCount: 5, primed: true},
  {name: "dfgerytdfvvc", connected: true, workers: 4, createdAt: "3days ago", nodeCount: 3, dbCount: 5, primed: true},
  {name: "gvdxfvcgds", connected: true, workers: 4, createdAt: "3days ago", nodeCount: 3, dbCount: 5, primed: true},
  {name: "vgfdgfgbcvb", connected: true, workers: 4, createdAt: "3days ago", nodeCount: 3, dbCount: 5, primed: true},


]};

export default (state = defaultState, action) => {
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
