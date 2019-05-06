import { USER_LOGIN } from "./actions";
import { IUserState } from "../state";

const getInitialState = (): IUserState => ({
  id: '',
  email: '',
  name: '',
});

export const userReducer = (state = getInitialState(), action: any): IUserState => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    default:
      return state;
  }
};