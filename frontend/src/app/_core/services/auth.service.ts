import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: IUser;

  constructor() {
    // dummy
    this.user = {
      login: 'sebd96',
      email: '',
      id: 1,
      name: 'qwerty90',
      level: 25,
      games: 150,
      inGame: false,
      ranking: 1024,
      session_time: 213312,
      wins: 25,
      currentExp: 2450,
      maxExp: 3600,
      characterSet: { gender: 'male', set: [3, 2, 3] },
    };
  }
}
