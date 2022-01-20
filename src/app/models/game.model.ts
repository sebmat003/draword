import { IPlayer } from './player.model';
import { ICategory } from './room.model';

export interface IMessage {
  msg: string;
  author: string;
  datetime: string;
}

export interface IGame {
  id: number;
  players: IPlayer[];
  messages: IMessage[];
  // think about model for current drawing to display it on canvas
  drawingData: any;
  remainingDrawingTime: string;
  currentWord: string;
  guessedWordProgress: string;
  category: ICategory;
}
