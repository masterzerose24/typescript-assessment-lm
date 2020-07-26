import { createStore, combineReducers } from "redux";
import { reducer, IUserState } from "../reducers";

export interface IAppState {
  app: IUserState;
}

const reducers = combineReducers({
  app: reducer,
});

const store = createStore(reducers);

export default store;