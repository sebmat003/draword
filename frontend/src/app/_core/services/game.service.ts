import { Injectable } from '@angular/core';
import { IGame } from 'src/app/models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public games: IGame[] = [];

  constructor() {
    // dummy
    this.games = [
      {
        id: 1,
        remainingDrawingTime: '1:15',
        currentWord: 'dog',
        guessedWordProgress: 'd',
        category: { id: 5, custom: false, name: 'animals' },
        drawingData: [],
        messages: [
          { datetime: '18:43', author: 'Someone', message: 'dog?' },
          {
            datetime: '18:44',
            author: 'sweqweq',
            message:
              'ddadasda sdasdas dasd asd asd asdasddasd asdas  das dasdasda',
          },
          { datetime: '18:45', author: 'Ddsadas', message: 'dsad' },
        ],
        players: [
          {
            id: 1,
            name: 'qwerty90',
            session_time: 213312,
            inGame: true,
            currentPoints: 50,
            details: {
              level: 25,
              games: 150,
              ranking: 1024,
              wins: 25,
              characterSet: { gender: 'male', set: [3, 2, 3] },
              currentExp: 0,
              maxExp: 0,
            },
          },
          {
            id: 2,
            name: 'qqqq',
            session_time: 312333,
            inGame: true,
            currentPoints: 1500,
            details: {
              level: 12,
              games: 20,
              ranking: 2566,
              wins: 11,
              characterSet: { gender: 'male', set: [1, 5, 5] },
              currentExp: 0,
              maxExp: 0,
            },
          },
          {
            id: 3,
            name: 'abbcbbc',
            session_time: 3123111,
            inGame: true,
            currentPoints: 800,
            details: {
              level: 54,
              games: 567,
              ranking: 23,
              wins: 200,
              characterSet: { gender: 'male', set: [3, 5, 3] },
              currentExp: 0,
              maxExp: 0,
            },
          },
          {
            id: 4,
            name: 'dd',
            session_time: 3123111,
            inGame: true,
            currentPoints: 900,
            details: {
              level: 54,
              games: 567,
              ranking: 23,
              wins: 200,
              characterSet: { gender: 'male', set: [5, 1, 2] },
              currentExp: 0,
              maxExp: 0,
            },
          },
          {
            id: 5,
            name: 'asa',
            session_time: 3123111,
            inGame: true,
            currentPoints: 250,
            isDrawing: true,
            details: {
              level: 54,
              games: 567,
              ranking: 23,
              wins: 200,
              characterSet: { gender: 'male', set: [5, 3, 1] },
              currentExp: 0,
              maxExp: 0,
            },
          },
          {
            id: 6,
            name: 'eqweq',
            session_time: 3123111,
            inGame: false,
            details: {
              level: 54,
              games: 567,
              ranking: 23,
              wins: 200,
              characterSet: { gender: 'male', set: [2, 2, 2] },
              currentExp: 0,
              maxExp: 0,
            },
          },
          {
            id: 7,
            name: 'eqweq',
            details: {
              level: 54,
              games: 567,
              ranking: 23,
              wins: 200,
              characterSet: { gender: 'male', set: [2, 2, 2] },
              currentExp: 0,
              maxExp: 0,
            },
            session_time: 3123111,
            inGame: false,
          },
          {
            id: 8,
            name: 'eqweq',
            details: {
              level: 54,
              games: 567,
              ranking: 23,
              wins: 200,
              characterSet: { gender: 'male', set: [2, 2, 2] },
              currentExp: 0,
              maxExp: 0,
            },
            session_time: 3123111,
            inGame: false,
          },
          {
            id: 9,
            name: 'eqweq',
            details: {
              level: 54,
              games: 567,
              ranking: 23,
              wins: 200,
              characterSet: { gender: 'male', set: [2, 2, 2] },
              currentExp: 100,
              maxExp: 1000,
            },
            session_time: 3123111,
            inGame: false,
          },
          {
            id: 10,
            name: 'eqweq',
            details: {
              level: 54,
              games: 567,
              ranking: 23,
              wins: 200,
              characterSet: { gender: 'male', set: [2, 2, 2] },
              currentExp: 0,
              maxExp: 0,
            },
            inGame: false,
            session_time: 3123111,
          },
        ],
      },
    ];
  }

  public getGameById(id: number): IGame {
    return this.games.filter((g: IGame) => g.id === id)[0];
  }
}
