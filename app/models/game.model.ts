import { Player } from "./player.model";
import { Category } from "./room.model";

export class Message {
  msg: string;
  author: string;
  datetime: string;
}

export class Game {
  id: number;
  players: Player[];
  messages: Message[];
  // think about model for current drawing to display it on canvas
  drawingData: any;
  remainingDrawingTime: string;
  currentWord: string;
  guessedWordProgress: string;
  category: Category;
}