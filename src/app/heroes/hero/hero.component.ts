import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name:string= 'Windstorm';
  age:number = 25;

  changeName = () => {
    this.name = 'Tornado';
  }
  changeAge = () => {
    this.age = 30;
  }
  reset= () => {
    this.name = 'Windstorm';
    this.age = 25;
  }
}
