import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

  
})
export class ListComponent {
  @Input()
  public listCharacters: Character[] = [];

  @Output()
  public characterDeleted: EventEmitter<string> = new EventEmitter<string>();

  public deleteCharacter(id: string): void {
    this.characterDeleted.emit(id);
  }

 }
