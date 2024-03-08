import { Component } from "@angular/core";


@Component({
    selector: 'counter-component',
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css'
})
export class CounterComponent {

    counter = 0;

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }

    reset() {
        this.counter = 0;
    }

}