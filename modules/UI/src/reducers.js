import { combineReducers }    from "redux";

import benchmarskReducer     from "./benchmarks/reducer.js";
import workersReducer        from "./workers/reducer.js";



export default combineReducers({
  benchmarks            : benchmarskReducer,
  workers               : workersReducer
});