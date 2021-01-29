export class CharacterSet {
    set: number[];
    gender: string;
}

export class Player {
    id: number;
    name: string;
    level: number;
    session_time: number;
    ranking: number;
    games: number;
    wins: number;
    characterSet: CharacterSet;
    inGame: boolean;
    currentPoints?: number;
    isDrawing?: boolean;
}

export class User extends Player {
    login: string;
    email: string;
    currentExp: number;
    maxExp: number;
}
