
import { combineReducers } from "redux";
import { appReducer } from "./app";
import {  userReducer } from "./user";
import { IState } from "./state";

export default combineReducers<IState>({
  app: appReducer,
  user: userReducer,
  world: (state, action) => ({
    teams: [],
    ultras: []
  }),
});
