import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
    // This service is provided in the root module
    providedIn: 'root'
})
export class DbzService {
    constructor() { }


    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Goku',
            power: 15000
        },
        {   
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        },
        {   
            id: uuid(),
            name: 'Krillin',
            power: 5000
        },
        {   
            id: uuid(),
            name: 'Gohan',
            power: 10000
        }
    ];

    public OnNewCharacter(character: Character): void {
        const newCharacter : Character = {
            id: uuid(),
            ...character
        };
        this.characters.push(newCharacter);
    }
    public OnCharacterDeleted(id: string): void {
        this.characters = this.characters.filter(character => character.id !== id);
    }
    
}