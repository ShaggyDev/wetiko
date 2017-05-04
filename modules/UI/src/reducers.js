import { combineReducers }    from "redux";

import benchmarskReducer     from "./benchmarks/reducer.js";
import workersReducer        from "./workers/reducer.js";
import clustersReducer        from "./clusters/reducer.js";



export default combineReducers({
  clusters              : clustersReducer,
  benchmarks            : benchmarskReducer,
  workers               : workersReducer
});