import { Component } from '@angular/core';

interface Hero {
  id: number;
  name: string;
  realName?: string;
}
@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroes: Hero[] =
  [
    { id: 1, name: 'Spiderman' , realName: 'Peter Parker'},
    { id: 2, name: 'Ironman' , realName: 'Tony Stark'},
    { id: 3, name: 'Hulk' , realName: 'Bruce Banner'},
    { id: 4, name: 'Thor' , realName: 'Thor Odinson'},
    { id: 5, name: 'Black Widow' , realName: 'Natasha Romanoff'},
    { id: 6, name: 'Captain America' , realName: 'Steve Rogers'},
    { id: 7, name: 'Hawkeye' , realName: 'Clint Barton'},
    { id: 8, name: 'Black Panther' , realName: 'T\'Challa'},
    { id: 9, name: 'Doctor Strange' , realName: 'Stephen Strange'},
    { id: 10, name: 'Antman' , realName: 'Scott Lang'}
  ];
  public deletedHero?: string;

  addHero(name: string): void {
    this.heroes.push({ id: this.heroes.length + 1, name });
  }

  deleteLastHero(): void {
    this.deletedHero = this.heroes.pop()?.name;
  }
}
