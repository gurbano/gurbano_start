import { STATS, SKILLS } from "./constants";

// Common to all entities
type IName = { first: string; last: string; nick: string;};
export type ID = string;
export type WithId = { id: ID; };
export type Skill = number; //number 0-255
export type Stat = number; //number 3 - 18


export type IBaseEntity = {
  name: IName;
} & WithId;

type BaseStats = {
  [STATS.STRENGTH]: Stat;
  [STATS.CHARISMA]: Stat;
  [STATS.STAMINA]: Stat;
} 
type BaseSkills = {
  [SKILLS.MARTIAL]: Skill; 
} 

type UltraStats = {
  [STATS.VOICE]: Stat;
} 

type UltraSkills = {
  [SKILLS.DIPLOMACY]: Skill;
  [SKILLS.DRUMS]: Skill;
  [SKILLS.INTONATION]: Skill;
  [SKILLS.SOR]: Skill;
} 
export type IUltra = {
  teamId: ID;
} & IBaseEntity & BaseStats & BaseSkills
  & UltraSkills & UltraStats;
