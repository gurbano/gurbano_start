import { IUserState } from "../state";

export const USER_LOGIN = 'USER_LOGIN';

export const login = (payload: IUserState) => ({
  type: USER_LOGIN,
  user: payload
});