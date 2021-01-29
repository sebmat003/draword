export class Category {
    id: number;
    name: string;
    custom: boolean;
    words?: string[];
}

export class Room {
    id: number;
    categories: Category[];
    goal: number;
    drawing_time: string;
    current_players: number;
    max_players: number;
    password: string;
    creator: string;
}