import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    ListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class HeroesModule { }
