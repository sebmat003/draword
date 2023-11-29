export interface ICategory {
  id: number;
  name: string;
  custom: boolean;
  words?: string[];
  selected?: boolean;
}

export interface IRoom {
  id: number;
  categories: ICategory[];
  goal: number;
  drawing_time: string;
  current_players: number;
  max_players: number;
  password: string | null;
  creator: string;
}
