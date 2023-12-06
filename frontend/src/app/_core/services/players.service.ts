import { Injectable } from '@angular/core';
import { IPlayer } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  public playersOnline: number;
  public players: IPlayer[];

  constructor() {
    // dummy
    this.playersOnline = 53;
    this.players = [
      {
        id: 1,
        name: 'qwerty90',
        session_time: 3123111,
        details: {
          level: 54,
          games: 567,
          ranking: 23,
          wins: 200,
          currentExp: 100,
          maxExp: 200,
          characterSet: {
            gender: 'male',
            set: [2, 2, 2],
          },
        },
        inGame: true,
        currentPoints: 50,
      },
      {
        id: 2,
        name: 'qqqq',
        session_time: 3123111,
        details: {
          level: 54,
          games: 567,
          ranking: 23,
          wins: 200,
          currentExp: 100,
          maxExp: 200,
          characterSet: {
            gender: 'male',
            set: [2, 2, 2],
          },
        },
        inGame: true,
        currentPoints: 1500,
      },
      {
        id: 3,
        name: 'abbcbbc',
        session_time: 3123111,
        details: {
          level: 54,
          games: 567,
          ranking: 23,
          wins: 200,
          currentExp: 100,
          maxExp: 200,
          characterSet: {
            gender: 'male',
            set: [2, 2, 2],
          },
        },
        inGame: true,
        currentPoints: 800,
      },
      {
        id: 4,
        name: 'dd',
        session_time: 3123111,
        details: {
          level: 54,
          games: 567,
          ranking: 23,
          wins: 200,
          currentExp: 100,
          maxExp: 200,
          characterSet: {
            gender: 'male',
            set: [1, 2, 5],
          },
        },
        inGame: true,
        currentPoints: 900,
      },
      {
        id: 5,
        name: 'asa',
        session_time: 3123111,
        details: {
          level: 54,
          games: 567,
          ranking: 23,
          wins: 200,
          currentExp: 100,
          maxExp: 200,
          characterSet: {
            gender: 'male',
            set: [2, 2, 2],
          },
        },
        inGame: true,
        currentPoints: 250,
        isDrawing: true,
      },
      {
        id: 6,
        name: 'eqweq',
        session_time: 3123111,
        details: {
          level: 54,
          games: 567,
          ranking: 23,
          wins: 200,
          currentExp: 100,
          maxExp: 200,
          characterSet: {
            gender: 'male',
            set: [2, 2, 2],
          },
        },
        inGame: false,
      },
      {
        id: 7,
        name: 'eqweq',
        session_time: 3123111,
        details: {
          level: 54,
          games: 567,
          ranking: 23,
          wins: 200,
          currentExp: 100,
          maxExp: 200,
          characterSet: {
            gender: 'male',
            set: [2, 2, 2],
          },
        },
        inGame: false,
      },
      {
        id: 8,
        name: 'eqweq',
        session_time: 3123111,
        details: {
          level: 54,
          games: 567,
          ranking: 23,
          wins: 200,
          currentExp: 100,
          maxExp: 200,
          characterSet: {
            gender: 'male',
            set: [2, 2, 2],
          },
        },
        inGame: false,
      },
      {
        id: 9,
        name: 'eqweq',
        session_time: 3123111,
        details: {
          level: 54,
          games: 567,
          ranking: 23,
          wins: 200,
          currentExp: 100,
          maxExp: 200,
          characterSet: {
            gender: 'male',
            set: [2, 2, 2],
          },
        },
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
          currentExp: 100,
          maxExp: 200,
          characterSet: {
            gender: 'male',
            set: [2, 2, 2],
          },
        },
        session_time: 3123111,
        inGame: false,
      },
    ];
  }
}
