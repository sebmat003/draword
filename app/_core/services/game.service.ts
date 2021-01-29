import { Injectable } from "@angular/core";
import { Game } from "ClientApp/app/models/game.model";

@Injectable({
   providedIn: 'root'
})
export class GameService {

  games: Game[];

   constructor() {
     //dummy
     this.games = [
       {id: 1, remainingDrawingTime: '1:15', currentWord: 'dog', guessedWordProgress: 'd', category: {id: 5, custom: false, name: 'animals'},
       drawingData: [], messages: [{datetime: '18:43', author:'Someone', msg:'dog?'}, {datetime: '18:44', author:'sweqweq', msg:'ddadasda sdasdas dasd asd asd asdasddasd asdas  das dasdasda'}, {datetime: '18:45', author:'Ddsadas', msg:'dsad'}, ], players: [
        {id: 1, name: 'qwerty90', level: 25, games: 150, ranking: 1024, session_time: 213312, wins: 25, inGame: true, currentPoints: 50, characterSet: {gender: 'male', set: [3,2,3]}},
        {id: 2, name: 'qqqq', level: 12, games: 20, ranking: 2566, session_time: 312333, wins: 11, inGame: true, currentPoints: 1500, characterSet: {gender: 'male', set: [1,5,5]}},
        {id: 3, name: 'abbcbbc', level: 54, games: 567, ranking: 23, session_time: 3123111, wins: 200, inGame: true, currentPoints: 800, characterSet: {gender: 'male', set: [3,5,3]}},
        {id: 4, name: 'dd', level: 54, games: 567, ranking: 23, session_time: 3123111, wins: 200, inGame: true, currentPoints: 900, characterSet: {gender: 'male', set: [5,1,2]}},
        {id: 5, name: 'asa', level: 54, games: 567, ranking: 23, session_time: 3123111, wins: 200, inGame: true, currentPoints: 250, isDrawing: true, characterSet: {gender: 'male', set: [5,3,1]}},
        {id: 6, name: 'eqweq', level: 54, games: 567, ranking: 23, session_time: 3123111, wins: 200, inGame: false, characterSet: {gender: 'male', set: [2,2,2]}},
        {id: 7, name: 'eqweq', level: 54, games: 567, ranking: 23, session_time: 3123111, wins: 200, inGame: false, characterSet: {gender: 'male', set: [2,2,2]}},
        {id: 8, name: 'eqweq', level: 54, games: 567, ranking: 23, session_time: 3123111, wins: 200, inGame: false, characterSet: {gender: 'male', set: [2,2,2]}},
        {id: 9, name: 'eqweq', level: 54, games: 567, ranking: 23, session_time: 3123111, wins: 200, inGame: false, characterSet: {gender: 'male', set: [2,2,2]}},
        {id: 10, name: 'eqweq', level: 54, games: 567, ranking: 23, session_time: 3123111, wins: 200, inGame: false, characterSet: {gender: 'male', set: [2,2,2]}},
       ] }
     ]
   }

   getGameById(id: number): Game {
     return this.games.filter((g: Game) => g.id === id)[0];
   }
}