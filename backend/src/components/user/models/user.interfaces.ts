import { GenderEnum, UserRoleEnum } from "./user.enums.js";

export interface IBasicUser {
  id: number;
  name: string;
  details: IUserDetails;
}

export interface IUserDetails {
  level: number;
  currentExp: number;
  maxExp: number;
  ranking: number;
  games: number;
  wins: number;
  characterSet: ICharacterSet;
}

export interface ICharacterSet {
  set: number[];
  gender: GenderEnum;
}

export interface IUser extends IBasicUser {
  login: string;
  email: string;
  password: string;
  role: UserRoleEnum;
}

export interface IPlayer extends IBasicUser {
  session_time: number;
  inGame: boolean;
  currentPoints?: number;
  isDrawing?: boolean;
}
