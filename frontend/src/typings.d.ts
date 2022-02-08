export interface Picture {
    id: number;
    image: string;
    name: string;
    height: string;
    width: string;
}

export interface Game {
    id: number;
    name: string;
    description: string;
    link: string;
    image: string;
}

export interface Notification {
    id: number;
    name: string;
    text: string;
}
