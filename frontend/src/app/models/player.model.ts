export interface ICharacterSet {
  set: number[];
  gender: string;
}

export interface IPlayer {
  id: number;
  name: string;
  level: number;
  session_time: number;
  ranking: number;
  games: number;
  wins: number;
  characterSet: ICharacterSet;
  inGame: boolean;
  currentPoints?: number;
  isDrawing?: boolean;
}

export interface IUser extends IPlayer {
  login: string;
  email: string;
  currentExp: number;
  maxExp: number;
}
