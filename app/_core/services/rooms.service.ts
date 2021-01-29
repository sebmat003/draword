import { Injectable } from "@angular/core";
import { Category, Room } from "ClientApp/app/models/room.model";

@Injectable({
    providedIn: 'root'
})
export class RoomsService {
    dummyRooms: Room[] = [
        {
            id: 1, categories: [{id: 1, name: 'geography', custom: false}], 
            current_players: 5, max_players: 12, drawing_time: '3min', 
            password: null, creator: 'Sebd96', goal: 2000
        },
        {
            id: 12, categories: [{id: 1, name: 'geography', custom: false},{id: 3, name: 'IT', custom: false},{id: 2, name: 'sport', custom: false}], 
            current_players: 12, max_players: 12, drawing_time: '3min', 
            password: null, creator: 'Sebd96', goal: 2000
        },
        {
            id: 323, categories: [{id: 2, name: 'sport', custom: false}], 
            current_players: 0, max_players: 12, drawing_time: '2min', 
            password: null, creator: 'Someone', goal: 1500
        },
    ]

    dummyCategories: Category[] = [
        {
            id: 1, name: 'geography', custom: false,
            words: ['Africa','altitude','analemma','Antarctic Circle', 'Antarctica','antipodes','Arctic','Arctic Circle','area','Asia','atlas','Australia','azimuth']
        },
        {
            id: 2, name: 'sport', custom: false,
            words: ['badminton', 'ball', 'base', 'baseball','basketball','bat','baton','batter','batting']
        }, 
        {
            id: 3, name: 'IT', custom: true,
            words: ['pc', 'Windows', 'keyboard', 'mouse', 'Cyberpunk', 'Agile', 'desktop', 'cable', 'ethernet', 'programming']
        }
    ]

    constructor() {}

    getRoomById(id: number): Room {
        return this.dummyRooms.filter((r:Room) => r.id === id)[0];
    }
}