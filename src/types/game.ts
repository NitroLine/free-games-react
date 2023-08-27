import {SystemReq} from "./systemReq";
import {Screenshot} from "./screenshot";

export interface Game {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    freetogame_profile_url: string
}


export interface GameFull extends Game{
    status: string,
    description: string,
    minimum_system_requirements: SystemReq,
    screenshots: Array<Screenshot>
}