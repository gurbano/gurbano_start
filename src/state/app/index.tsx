import { IAppState } from "../state";

const getInitialState = (): IAppState => ({
  inited: false,
  name: '',
  version: '',
});
export const appReducer = (state = getInitialState(), action: any): IAppState => {
  return state;
};