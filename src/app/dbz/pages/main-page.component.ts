import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(private DbzService: DbzService) { 
        
    }

    get characters(): Character[] {
        return this.DbzService.characters;
    }

    public OnNewCharacter(character: Character): void {
        this.DbzService.OnNewCharacter(character);
    }
    public OnCharacterDeleted(id: string): void {
        this.DbzService.OnCharacterDeleted(id);
    }


}