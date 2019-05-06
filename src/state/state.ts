import { SKILLS, STATS } from "./constants";
import { WithId, IUltra, ID } from "./types";

export type IAppState = {
  inited: boolean;
  name: string;
  version: string;
};

export type IUserState = {
  email: string,
  name: string,
} & WithId;

/**
 * WORLD
 *  ultras - props, state, 
 */


export type ITeam = {
  name: string;
  leagueId: ID;
} & WithId;

export type IPC = {

} & IUltra;

export type IWorld = {
  teams: Array<ITeam>;
  ultras: Array<IUltra>;
  
}

//-----
export type IState = {
  app: IAppState;
  user?: IUserState;
  world: IWorld;
};